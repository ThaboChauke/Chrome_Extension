# Chrome Extension - Leads Tracker

## Project Overview

Leads Tracker is a web application designed to save and track leads (e.g., URLs or text). Users can enter a lead manually, save the current browser tab, or delete all saved leads. The leads are displayed dynamically on the webpage and persisted using the browser's local storage, so the data is retained even after a page reload.

## Installation

1. Clone the repository or download the files manually.

    ```bash
    git clone https://github.com/ThaboChauke/Chrome_Extension.git
    ```

2. Navigate to the project directory.

    ```bash
    cd Chrome_Extension
    ```

3. Open `index.html` in your web browser to view the application.
4. To enable the `SAVE TAB` feature, this app requires Chrome and the Chrome Tabs API, so it will need to be part of a Chrome extension.

## Usage

- **Enter a Lead:** Type a lead (URL or text) into the input field.
- **Save the Lead:** Click the `SAVE INPUT` button to save the lead to the list.
- **Save the Current Tab:** Click the `SAVE TAB` button to save the URL of the currently active browser tab.
- **Delete All Leads:** Double-click the `DELETE ALL` button to clear all saved leads.
- **View Saved Leads:** The saved leads are displayed as clickable links in an unordered list


## Features
1. **Save Lead Manually:** Input a lead manually and save it to the list.
2. **Save Current Tab**: Capture and save the URL of the active browser tab (requires Chrome Tabs API).
3. **Delete All Leads**: Clear all stored leads with a double-click.
4. **Persistent Storage:** Leads are stored in the browser’s localStorage so they persist across sessions.