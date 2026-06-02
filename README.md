# Nikhitha Kyatham Portfolio

Modern React portfolio for a fresher full-stack developer profile focused on the MERN stack.

## What is included

- Responsive single-page portfolio built with React and Vite.
- Profile image from `src/assets/profile.png`.
- Downloadable resume at `public/resume.pdf`.
- Sections for About, Skills, Experience, Projects, Achievements, and Contact.
- Dynamic GitHub project cards from `https://github.com/Honey7868`.
- Fallback project cards if the GitHub API is unavailable.
- Deployment-ready setup for Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Build check

```bash
npm run build
```

## Customize before final deployment

1. Replace `public/resume.pdf` whenever you create a newer resume.
2. Update exact email, project links, GitHub repository descriptions, and any new certificates in `src/App.jsx`.
3. Add descriptions and topics to your GitHub repositories so the dynamic project cards look stronger.
4. Replace `src/assets/profile.png` if you want a different profile photo.

## Deploy to GitHub and Vercel

1. Create a new GitHub repository, for example `nikhitha-portfolio`.
2. In this project folder, initialize git if it is not already initialized:

```bash
git init
git add .
git commit -m "Build React portfolio"
git branch -M main
git remote add origin https://github.com/Honey7868/nikhitha-portfolio.git
git push -u origin main
```

3. Open Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Keep the Vercel defaults:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**.
7. After deployment, copy the Vercel URL and add it to your GitHub profile and LinkedIn profile.
