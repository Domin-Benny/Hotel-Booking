
    Please before you run the code make sure you have the following insatlled and configured:
        `NodeJs
        `

# Hotel-Booking
Node.js Configuration Guide

This guide provides steps to install and configure Node.js on Windows, Linux, and macOS.

Prerequisites

Administrator/root access to your machine.

A stable internet connection.

Installation and Configuration

# Windows

Download Node.js Installer

Visit the Node.js official website and download the latest LTS version.

Run the Installer

Double-click the downloaded .msi file and follow the on-screen instructions.

Ensure the checkbox for "Add to PATH" is selected during installation.

Verify Installation


Open Command Prompt or PowerShell and run the following commands:

        node -v
        npm -v

These commands should output the installed Node.js and npm versions.

Optional: Install a Package Manager (e.g., Yarn)

Run:

        npm install --global yarn

#Linux

Using Node Version Manager (NVM) - Recommended

Install NVM

Run:

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

Reload your shell:

        source ~/.bashrc  # For Bash
        source ~/.zshrc   # For Zsh

Install Node.js

Install the latest LTS version:

        nvm install --lts

Verify Installation

Check the installed versions:

        node -v
        npm -v

Direct Installation (For Fedora and Ubuntu Users)

Update System Packages

Run:

        sudo dnf update         # For Fedora
        sudo apt update         # For Ubuntu

Add Node.js Repository

Fedora:

        sudo dnf module enable nodejs:16 -y
        sudo dnf install nodejs -y

Ubuntu:

        curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
        sudo apt install -y nodejs

Verify Installation

Check versions:

        node -v
        npm -v

#macOS

Using Homebrew - Recommended

Install Homebrew (if not already installed)

Run:

        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Install Node.js

Run:

        brew install node

Verify Installation

Check versions:

        node -v
        npm -v

Using NVM

Install NVM

Run:

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    
Reload your shell:

        source ~/.zshrc

Install Node.js

Run:

        nvm install --lts

Verify Installation

Check versions:

        node -v
        npm -v

Post-Installation Steps

Update npm (if required):

        npm install -g npm@latest

Global Package Permissions (Linux/macOS):

Configure npm to avoid using sudo for global packages:

        mkdir ~/.npm-global
        npm config set prefix '~/.npm-global'

Add the following to your shell profile:

        export PATH=~/.npm-global/bin:$PATH

Reload your shell to apply changes.

Create a Test Script

Create a test.js file:

        console.log("Node.js is configured successfully!");

Run it:

        node test.js

Troubleshooting

If node or npm commands are not found, check if the installation path is added to your PATH environment variable.

Refer to the Node.js documentation for more support.

<<<<<<< HEAD
=======
# news
>>>>>>> a5f287c (20:13)
