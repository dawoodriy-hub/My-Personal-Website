# My Personal Website — dawoodweb.com

A modern, responsive personal portfolio for **Dawood Riyazi**, showcasing coding projects, AI experiments, and a learning journey.

## ✨ Highlights

- React-powered single-page portfolio
- Responsive design for desktop, tablet, and mobile
- Dark futuristic visual style with subtle motion
- Project showcase for Python, C++, Java, React and web development
- Skills and learning journey sections
- Accessible semantic HTML and reduced-motion support
- GitHub Actions deployment to GitHub Pages
- Ready for custom domain `dawoodweb.com`

## 🧰 Tech Stack

**Frontend:** React, JavaScript, HTML5, CSS3  
**Programming:** Python, C++, Java  
**Tooling:** Vite, npm, Git, GitHub  
**Deployment:** GitHub Actions + GitHub Pages

## 📁 Structure

```text
My Personal Website/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## 🚀 Run locally

```bash
npm install
npm run dev
```

Then open the local address shown by Vite.

## 🏗️ Production build

```bash
npm run build
npm run preview
```

## ⚙️ GitHub Actions deployment

The repository contains `.github/workflows/deploy.yml`.

On every push to `main`, GitHub Actions:

1. Installs Node.js dependencies.
2. Runs the Vite production build.
3. Uploads the `dist/` directory as a Pages artifact.
4. Deploys the artifact to GitHub Pages.

In GitHub, use **Settings → Pages → Build and deployment → Source → GitHub Actions**.

## 🌐 Custom domain: dawoodweb.com

Once GitHub Pages deployment is active:

1. Open **Settings → Pages**.
2. Set the custom domain to `dawoodweb.com`.
3. At your domain registrar/DNS provider, add the DNS records GitHub recommends for the repository.
4. Wait for DNS verification, then enable HTTPS.

The GitHub Actions workflow handles site deployment; the DNS records must be managed at the domain provider.

## 🎯 Project philosophy

This website is designed to grow with Dawood's coding journey. New projects can be added without redesigning the whole site.

> Build. Experiment. Learn. Repeat.

## 📜 License

Personal portfolio project. Content and project examples belong to their respective owners where applicable.
