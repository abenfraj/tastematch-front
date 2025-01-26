# TasteMatch

## Overview
TasteMatch is a mobile application that helps users discover and match with restaurants based on their preferences. Built with **Ionic** and **Capacitor**, it provides a seamless cross-platform experience.

---

## Prerequisites

To get started, ensure you have the following installed:

- **Node.js** (version 18+)
- **npm** (version 9+)
- **Ionic CLI**: Install globally using `npm install -g @ionic/cli`
- **Android Studio** (for Android development)
- **Java JDK 17+** (for Android development)

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/abenfraj/tastematch-front.git
cd tastematch-front
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

#### For Web Development:

```bash
ionic serve
```

#### Add Android Platform:

```bash
ionic cap add android
```

#### Build the Project:

```bash
ionic cap build android
```

#### Run on Android with Live Reload:

```bash
npm run start:mobile
```

---

## Generating the APK

To generate the APK file for Android, follow these steps:

### Prerequisites

- Ensure you have the **Android SDK** installed and properly configured.
- Set the following environment variables:
  - `ANDROID_HOME`: Path to your Android SDK installation.
  - `JAVA_HOME`: Path to your Java Development Kit (JDK).
  - Add the `platform-tools` and `tools` directories inside the Android SDK to your system's `PATH`.

### Steps

1. Build the Android project:
   ```bash
   ionic cap build android
   ```

2. Open the project in Android Studio:
   ```bash
   ionic cap open android
   ```

3. In Android Studio:
   - Go to **Build** > **Build Bundle(s)/APK(s)** > **Build APK(s)**.
   - The APK will be generated and can be found in the `android/app/build/outputs/apk/` directory.

---

## Available Scripts

Here are some of the key scripts you can use:

- `npm start` - Start the app in web development mode.
- `npm run build` - Build the application.
- `npm run start:mobile` - Run the app on Android with live reload.

---

## Project Structure

```
tastematch-front/
├── src/                # Source code
├── android/            # Native Android code
├── www/                # Web build
└── capacitor.config.json # Capacitor configuration
```

---

## Contributors

Meet the team behind TasteMatch:

- **BHATTI Ali** - [@DirtyHendz](https://github.com/DirtyHendz)
- **BEN FRAJ Ayoub** - [@abenfraj](https://github.com/abenfraj)
- **DAGHOUI Oussama** - [@Doussama49](https://github.com/Doussama49)
- **EL KARKI Adam** - [@adamelkarki](https://github.com/adamelkarki)
- **HADIOUI Sélim** - [@selimhaddioui](https://github.com/selimhaddioui)
- **NGUYEN Minh-Tri** - [@Minh-Triii](https://github.com/Minh-Triii)

---

## License

© 2024 TasteMatch Team. All rights reserved.
