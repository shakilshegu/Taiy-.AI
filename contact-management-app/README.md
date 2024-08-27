
### **Contact Management Application Documentation**

#### **Project Overview**
The Contact Management Application is a React-based web application that allows users to manage their contacts, including adding, editing, and deleting contact information. The application features a responsive design, ensuring that it works seamlessly across different devices.

Additionally, the application integrates a feature to check COVID-19 cases using graphs and line maps. This feature visualizes historical COVID-19 data, allowing users to track the number of cases, deaths, and recoveries over time.

---

### **Technologies Used**
- **Frontend:** React, TypeScript, Tailwind CSS
- **State Management:** React Query for data fetching and management
- **Routing:** React Router
- **Charts:** Chart.js with React Chart.js 2
- **Maps:** Leaflet for interactive maps
- **API Requests:** Axios

---

### **How to Run the Application**

#### **1. Clone the Repository**
To get started, clone the repository to your local machine using the following command:

```bash
git clone <repository-url>
cd contact-management-app
```

#### **2. Install Dependencies**
Before running the application, make sure to install all the necessary dependencies. Navigate to the project directory and run:

```bash
npm install
```

This command will install all the required npm packages listed in the `package.json` file.

#### **3. Set Up Environment Variables**
Create a `.env` file in the root directory of the project. Add any necessary environment variables such as API URLs. For this project, no specific environment variables are required for the local setup.

#### **4. Start the Development Server**
Once the dependencies are installed, start the development server with:

```bash
npm start
```

This will launch the application in development mode. You can view it in your browser by navigating to `http://localhost:3000`.

The page will reload if you make edits to the code. You will also see any lint errors in the console.

#### **5. Build for Production**
To build the app for production, run:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

---

### **API Endpoints Used**

The application fetches data related to COVID-19 cases using the following API endpoint:

- **Historical Data Endpoint:** 
  - **URL:** `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
  - **Purpose:** This endpoint provides historical data of COVID-19 cases, including the number of cases, deaths, and recoveries worldwide. The data is utilized in the "COVID-19 Cases Over Time" chart within the application.

#### **Fetching Historical Data**
The `fetchHistoricalData` function in the `LineChart` component is responsible for fetching the historical data using Axios:

```typescript
const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return data;
};
```

React Query is used to manage this data, ensuring efficient data fetching and caching within the application.

---

### **Application Structure**

- **Components:**
  - **Sidebar:** Contains navigation links and toggles the visibility of additional options like Dashboard menus.
  - **LineChart:** Displays a line chart of COVID-19 cases over time using Chart.js.
  - **MapView:** Displays an interactive map of COVID-19 cases by country using Leaflet.

- **Pages:**
  - **Dashboard:** Consists of various sections like World Total Count, Cases by Country, and Cases Over Time.
  - **Contact: Allows users to manage their contacts by adding, editing, and deleting contact information. The page is designed to be user-friendly, with a responsive layout that adapts to different screen sizes.

- **Styling:**
  - Tailwind CSS is used for responsive design and styling of components.

- **Data Visualization:**
  - **LineChart Component:** Visualizes the trends in COVID-19 cases, deaths, and recoveries over time.
  - **MapView Component:** Provides a geographic overview of COVID-19 cases, highlighting affected regions on an interactive map.

---

### **Conclusion**
This documentation provides a comprehensive overview of how to set up, run, and understand the structure of the Contact Management application with additional COVID-19 data visualization features. If you have any issues or questions, please refer to the codebase or reach out for further assistance.

--- 

This guide now includes the new features, helping users track COVID-19 data along with managing their contacts.