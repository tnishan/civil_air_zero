# civil_air_zero
# Setup Instructions

## Django Backend

1. Navigate to the `civil_air_zero` directory:

    ```sh
    cd civil_air_zero
    ```

2. Apply migrations:

    ```sh
    python manage.py migrate
    ```

3. Run the Django development server:

    ```sh
    python manage.py runserver
    ```

The Django server should now be running at http://127.0.0.1:8000/

## React Frontend

1. Navigate to the `civil_react` directory:

    ```sh
    cd ../civil_react
    ```

2. Install the necessary packages:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

The React server should now be running at http://localhost:3000/
