# Music Festival Schedule Service Frontend

## Description
This React application serves as the frontend for the Music Festival Organization Service. It allows users to view and manage music festival schedules, including viewing schedule details, removing shows from schedules, and searching schedules.

## Features
- View a list of music festival schedules
- Click on a schedule to view its details, including associated shows and users
- Remove shows from a specific schedule
- Live Search schedules by title
- Responsive design for desktop, tablet, and mobile devices

## Components
- ScheduleList: Displays a grid of schedule cards
- ScheduleDetail: Shows detailed view of a selected schedule
- Navigation: Handles responsive navigation
- Search/Filter: Allows users to search or filter schedules

## API Integration
This frontend application integrates with a Rails API backend. Ensure the API is running and accessible at `http://localhost:3000/api/v1/`.

## BE Installation
1. Clone the BE repository: https://github.com/aloraalee/music-festival-be.git
2. Navigate to the project directory
3. Set up the database: 
### `rails db:create db:migrate db:seed`
## Usage
To start the server:
### `rails s`

## FE Installation
1. Clone the FE repository: https://github.com/aloraalee/music-festival-fe.git
2. Navigate to the project directory:
## Usage
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser since the backend should be on http://localhost:3000.

The page will reload when you make changes.\
You may also see any lint errors in the console.

