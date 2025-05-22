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

* ![Static Badge](https://img.shields.io/badge/frontend-blue?style=plastic)
![Static Badge](https://img.shields.io/badge/React-%2361DAFB?style=for-the-badge&logo=react&logoSize=auto&labelColor=black)![Static Badge](https://img.shields.io/badge/-%2341B883?style=for-the-badge&logo=vite&logoColor=%23F0DB4F&logoSize=auto&label=Vite&labelColor=%23646CFF)![Static Badge](https://img.shields.io/badge/-%232965F1?style=for-the-badge&logo=css&logoColor=white&logoSize=auto&label=css&labelColor=%23264DE4)
* ![Static Badge](https://img.shields.io/badge/backend-red?style=plastic)
![Static Badge](https://img.shields.io/badge/node.js-%23333333?style=for-the-badge&logo=node.js&logoColor=%23333333&logoSize=auto&labelColor=%23339933)![Static Badge](https://img.shields.io/badge/express.js-%23333333?style=for-the-badge&logo=express&logoColor=white&logoSize=auto&labelColor=red)
* ![Static Badge](https://img.shields.io/badge/Vertex%20Ai%20%26%20Automl-%2334A853?style=for-the-badge&logo=google&logoColor=%234285F4&logoSize=auto&label=Google%20&labelColor=%23FBBC05)
* ![Static Badge](https://img.shields.io/badge/Cloud%20run-%23EA4335?style=for-the-badge&logo=google%20cloud&logoColor=%234285F4&logoSize=auto&label=Google%20&labelColor=%23FBBC05)

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
  ![Screenshot 2025-05-22 131405](https://github.com/user-attachments/assets/73ea010a-b451-4d92-96e0-25eedcfa13e6)
* Click the Analyze button and wait for your results
  ![Screenshot 2025-05-22 131513](https://github.com/user-attachments/assets/c945e15f-75c5-4157-ba01-bde457778ac2)
* Get prediction with confidence score and image preview
  ![Screenshot 2025-05-22 131701](https://github.com/user-attachments/assets/5c2f6dd9-b436-4569-8cf6-1f543d7064a5)

---

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Contributors

<a href="https://github.com/benthuralot/mission1-may-2025/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=benthuralot/mission1-may-2025" alt="Contributors" style="width: 100px; height: 100px;" />
</a>

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
