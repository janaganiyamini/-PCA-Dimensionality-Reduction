const steps = [
  { title: "Load the Dataset", desc: "Import the digits dataset and flatten images into feature vectors.", code: `from sklearn.datasets import load_digits\nimport pandas as pd\n\ndigits = load_digits()\nX = digits.data\ny = digits.target\nprint(X.shape)  # (1797, 64)` },
  { title: "Scale the Features", desc: "Use StandardScaler so PCA works correctly on all features.", code: `from sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)` },
  { title: "Apply PCA with Different Components", desc: "Try PCA with 2, 10, 30, and 50 components to see the effect.", code: `from sklearn.decomposition import PCA\n\nfor n in [2, 10, 30, 50]:\n    pca = PCA(n_components=n)\n    X_reduced = pca.fit_transform(X_scaled)\n    variance = sum(pca.explained_variance_ratio_) * 100\n    print(f"Components: {n}, Variance Retained: {variance:.2f}%")` },
  { title: "Plot Cumulative Explained Variance", desc: "Visualize how much information is kept as components increase.", code: `import matplotlib.pyplot as plt\nimport numpy as np\n\npca_full = PCA().fit(X_scaled)\ncumulative = np.cumsum(pca_full.explained_variance_ratio_)\n\nplt.plot(cumulative)\nplt.xlabel("Number of Components")\nplt.ylabel("Cumulative Explained Variance")\nplt.title("Explained Variance vs Components")\nplt.axhline(y=0.95, color='r', linestyle='--', label='95% Variance')\nplt.legend()\nplt.show()` },
  { title: "Transform with Optimal Components", desc: "Choose the best number of components and reduce the dataset.", code: `pca = PCA(n_components=30)\nX_reduced = pca.fit_transform(X_scaled)\nprint(f"Reduced shape: {X_reduced.shape}")` },
  { title: "Train Model on Reduced Data", desc: "Use Logistic Regression on both original and reduced datasets.", code: `from sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)\nX_train_r, X_test_r, _, _ = train_test_split(X_reduced, y, test_size=0.2, random_state=42)\n\n# Original\nlr1 = LogisticRegression(max_iter=10000)\nlr1.fit(X_train, y_train)\nprint(f"Original Accuracy: {accuracy_score(y_test, lr1.predict(X_test)):.4f}")\n\n# Reduced\nlr2 = LogisticRegression(max_iter=10000)\nlr2.fit(X_train_r, y_train)\nprint(f"Reduced Accuracy: {accuracy_score(y_test, lr2.predict(X_test_r)):.4f}")` },
  { title: "Visualize 2D PCA Scatter Plot", desc: "Reduce to 2 components and plot to see how well classes separate.", code: `pca_2d = PCA(n_components=2)\nX_2d = pca_2d.fit_transform(X_scaled)\n\nplt.figure(figsize=(10, 7))\nscatter = plt.scatter(X_2d[:, 0], X_2d[:, 1], c=y, cmap='tab10', s=10)\nplt.colorbar(scatter)\nplt.title("2D PCA Scatter Plot")\nplt.xlabel("Component 1")\nplt.ylabel("Component 2")\nplt.show()` },
];

const StepsSection = () => (
  <section className="px-4 py-14" style={{ background: "hsl(var(--step-bg))" }}>
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-8 text-2xl font-bold">Step-by-Step Guide</h2>
      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="rounded-xl border bg-card p-5 shadow-sm" style={{ borderColor: "hsl(var(--step-border))" }}>
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
            <p className="mb-3 text-sm text-muted-foreground">{step.desc}</p>
            <pre className="overflow-x-auto rounded-lg p-4 text-sm" style={{ background: "hsl(var(--code-bg))", color: "hsl(var(--code-foreground))" }}>
              <code>{step.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
