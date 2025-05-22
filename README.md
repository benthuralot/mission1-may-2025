<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

<br />
<div align="center">
  <h3 align="center">🚗 Turners Car Recognition – Mission 1 (May 2025)</h3>

  <p align="center">
    Upload an image, identify a car using Google Vision or AutoML, get instant predictions.
    <br />
    <a href="https://github.com/benthuralot/mission1-may-2025"><strong>Explore the code »</strong></a>
    <br />
    <a href="#installation">Install Guide</a>
    ·
    <a href="#usage">Usage</a>
    ·
    <a href="#deployment">Deployment</a>
  </p>
</div>

---

## Table of Contents

- [About The Project](#about-the-project)
- [Folder Structure](#folder-structure)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

---

## About The Project

This is a full-stack AI image recognition web app themed after Turners Cars. It allows users to upload an image of a car and get predictions about its make or model using Google Vision API or AutoML Vision.

---

## 📁 Folder Structure

```bash
mission1-may-2025/
├── backend/
│   ├── index.js
│   ├── .env                # Not included in Git
│   └── turners-car-recognition-xxxx.json  # Not included in Git
├── frontend/
│   ├── App.jsx
│   ├── App.css
│   └── Index.css
│   └── ... 
└── README.md
```
---

## Built With

* React + Vite, CSS (Frontend)
* Node.js + Express (Backend)
* Google Cloud Vision & AutoML Vision
* Google Cloud Run

---

## Getting Started

### Prerequisites

* Node.js & npm
* Google Cloud project with Vision & AutoML APIs enabled
* A trained AutoML model (if using custom)

### Installation

1. Clone the repo

```bash
git clone https://github.com/benthuralot/mission1-may-2025.git
cd mission1-may-2025
```

2. Install dependencies

```bash
# From project root
cd backend
npm install

cd ../frontend
npm install
```

3. Create a `.env` file in the backend folder and add:

```
GOOGLE_APPLICATION_CREDENTIALS=./keyfile.json
REGION=us-central1
ENDPOINT_ID=yourid
PROJECT_ID=yourid
PORT=4000
```

4. Copy your Google service account key to `keyfile.json` in the backend folder.

5. Start locally:

```bash
# open a terminal to run frontend
cd frontend
npm run dev

# open a seperate terminal to run backend
cd backend
nodemon index.js
```

---

## Usage

* Drag and drop or upload an image
* Toggle between Vision API or AutoML
* Get prediction with confidence score and image preview

---

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Contact

**Project Lead:** Hershyl
**GitHub:** [benthuralot](https://github.com/benthuralot)

Project Repo: [https://github.com/benthuralot/mission1-may-2025](https://github.com/benthuralot/mission1-may-2025)

---

<!-- MARKDOWN LINKS -->

[contributors-shield]: https://img.shields.io/github/contributors/benthuralot/mission1-may-2025.svg?style=for-the-badge
[contributors-url]: https://github.com/benthuralot/mission1-may-2025/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/benthuralot/mission1-may-2025.svg?style=for-the-badge
[forks-url]: https://github.com/benthuralot/mission1-may-2025/network/members
[stars-shield]: https://img.shields.io/github/stars/benthuralot/mission1-may-2025.svg?style=for-the-badge
[stars-url]: https://github.com/benthuralot/mission1-may-2025/stargazers
[issues-shield]: https://img.shields.io/github/issues/benthuralot/mission1-may-2025.svg?style=for-the-badge
[issues-url]: https://github.com/benthuralot/mission1-may-2025/issues
[license-shield]: https://img.shields.io/github/license/benthuralot/mission1-may-2025.svg?style=for-the-badge
[license-url]: https://github.com/benthuralot/mission1-may-2025/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/yourlinkedin
