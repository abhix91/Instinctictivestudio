# Student Management Dashboard

## Demo Video

Check out the demo video below to see the Student Management Dashboard in action:

[Click here to watch the demo video](https://drive.google.com/file/d/1oB2V5dPkxV4EscU9G0uyOYoIy9u1lEFD/view?usp=drive_link)


## Features

1. **Add Students**  
   Register new students by entering their details.
2. **Update Students**  
   Edit the details of existing students.
3. **Delete Students**  
   Remove student records permanently.
4. **Retrieve Students**  
   View and search student details.

---

## Technologies Used

### **Frontend**
- **JavaScript**: Core programming language.
- **ReactJS**: Dynamic and responsive user interface.
- **Redux**: State management to handle complex data flow.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive UI design.

### **Backend**
- **Node.js**: Backend runtime environment.
- **Express.js**: Server-side routing and middleware.
- **Prisma**: Database ORM for connecting with Supabase.

### **Database**
- **Supabase**: Postgres-based backend-as-a-service for data storage.

---

## Architecture

The project implements the **Model-View-Controller (MVC)** design pattern:
1. **Model**  
   Defines the schema and interacts with the database using Prisma.
2. **View**  
   ReactJS components and Tailwind CSS render the UI for user interactions.
3. **Controller**  
   Contains the business logic and communicates between the Model and View.

---

## Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)
- **Supabase Account** (for database setup)


---

## Installation

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/abhix91/Instinctictivestudio.git
cd Instinctictivestudio
