# Resume Site

Welcome to the Resume Site repository. This project is a simple, responsive website designed to showcase an individual's resume, including sections for personal information, work experience, education, skills, projects, and contact information.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)

## Technologies

- **HTML5**: For structuring the content.
- **CSS3**: For styling the website.
- **ReactJS**: As a frontend framework.
- **styled-components**: For component design.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/resume-site.git
   ```

## Deployment

The site is deployed on an AWS S3 bucket using Terraform. Follow these steps to deploy your own instance:

1. **Install Terraform**: Download and install Terraform from the [official website](https://www.terraform.io/downloads.html).

2. **Configure AWS CLI**: Ensure you have the AWS CLI installed and configured with the necessary permissions to create and manage S3 buckets. Follow the [AWS CLI setup guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) for installation and configuration instructions.

3. **Initialize Terraform**:
   ```bash
   terraform init
   ```

3. **Appy Terraform**:
   ```bash
   terraform apply
   ```
