// Import necessary components from react-email
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Link,
  } from "@react-email/components";
  
  // Define the base email template
  const BaseEmailTemplate = ({ username = "User", actionUrl = "#" }) => {
    return (
      <Html>
        <Head />
        <Preview>Welcome to Our Platform!</Preview>
        <Body style={main}>
          <Container style={container}>
            {/* Header Section */}
            <Heading style={heading}>Hello {username},</Heading>
  
            {/* Main Content Section */}
            <Section style={content}>
              <Text style={paragraph}>
                Thank you for signing up! We're excited to have you on board.
              </Text>
              <Text style={paragraph}>
                To get started, please verify your email address by clicking the
                button below:
              </Text>
              <Link href={actionUrl} style={button}>
                Verify Email
              </Link>
            </Section>
  
            {/* Divider */}
            <Hr style={divider} />
  
            {/* Footer Section */}
            <Section style={footer}>
              <Text style={paragraph}>
                If you did not sign up for this account, please ignore this email
                or contact support.
              </Text>
              <Text style={paragraph}>
                © 2023 Your Company Name. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  // Styles for the email template
  const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
  };
  
  const heading = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "16px",
  };
  
  const content = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "24px",
    border: "1px solid #eaeaea",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#333",
    marginBottom: "16px",
  };
  
  const button = {
    backgroundColor: "#007bff",
    borderRadius: "4px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    padding: "12px 24px",
    display: "inline-block",
    marginTop: "16px",
  };
  
  const divider = {
    borderColor: "#eaeaea",
    margin: "24px 0",
  };
  
  const footer = {
    fontSize: "14px",
    color: "#666",
    marginTop: "24px",
  };
  
  export default BaseEmailTemplate;