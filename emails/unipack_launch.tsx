import React from 'react';
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

// --- Asset Definitions (Replace with actual URLs) ---
// It's good practice to keep these separate. Ensure high-resolution images.
const ASSETS = {
  logo: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205030/UniPack%20Emails/Launch%20E-Mail/Logo_vg2unu.png',
  hero: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205032/UniPack%20Emails/Launch%20E-Mail/Hero_Image_bqcseb.png',
  boardPlant: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205032/UniPack%20Emails/Launch%20E-Mail/Board_Plant_Image_cvb7c4.png',
  proLine: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205031/UniPack%20Emails/Launch%20E-Mail/Pro_Line_180_ta1yci.png',
  smartLine150: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205031/UniPack%20Emails/Launch%20E-Mail/Smart_Line_150_ta1yci.png',
  smartLine120: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205030/UniPack%20Emails/Launch%20E-Mail/Smart_Line_120_gvmwh7.png',
  spareParts: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205033/UniPack%20Emails/Launch%20E-Mail/Spare_Part_Hero_kbzxni.png',
  worldMap: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205033/UniPack%20Emails/Launch%20E-Mail/Support_Infrastructure_ojtivi.png',
  socialFacebook: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205030/UniPack%20Emails/Launch%20E-Mail/facebook_icon.png',
  socialTwitter: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205030/UniPack%20Emails/Launch%20E-Mail/twitter_icon.png',
  socialLinkedin: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205030/UniPack%20Emails/Launch%20E-Mail/linkedin_icon.png',
  socialInstagram: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205030/UniPack%20Emails/Launch%20E-Mail/instagram_icon.png',
  socialYoutube: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205030/UniPack%20Emails/Launch%20E-Mail/youtube_icon.png',
  // Removed uniCorrLogo as it seemed redundant within product sections
  uniSupportLogo: 'https://res.cloudinary.com/kabira-mobility/image/upload/v1744205030/UniPack%20Emails/Launch%20E-Mail/unisupport_logo.png',
};

// --- Base Styles ---
const fontFamily = 'Arial, Helvetica, sans-serif'; // Sticking to web-safe fonts for email
const mainTextColor = '#1d1d1f'; // Apple-like near black
const secondaryTextColor = '#555555'; // Softer gray for less important text
const lightTextColor = '#888888'; // Even lighter for footer details
const brandColor = '#f00027'; // Unipack Red
const backgroundColor = '#f8f8f8'; // Light gray background
const contentBackgroundColor = '#ffffff'; // White for content sections/cards

const baseTextStyles = {
  fontFamily,
  color: mainTextColor,
  margin: '0',
  lineHeight: '1.6', // Increased for readability
};

// --- Button Styles ---
const buttonBase = {
  fontFamily,
  borderRadius: '8px', // Softer corners
  textDecoration: 'none',
  fontSize: '15px', // Slightly adjusted
  fontWeight: '600', // Semi-bold
  textAlign: 'center',
  display: 'block', // Changed to block for table cell usage
  padding: '14px 0', // Generous padding (width managed by table cell)
  boxSizing: 'border-box', // Important for padding/border calculation
  width: '100%', // Make buttons fill their container cell
};

const primaryButton = {
  ...buttonBase,
  backgroundColor: brandColor,
  color: '#ffffff',
};

const secondaryButton = {
  ...buttonBase,
  backgroundColor: contentBackgroundColor, // Match content background
  color: brandColor,
  border: `1px solid ${brandColor}`,
};

// --- Layout Styles ---
const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  width: '100%',
};

const sectionStyle = {
  backgroundColor: contentBackgroundColor,
  borderRadius: '12px', // Slightly more pronounced rounding for cards
  padding: '32px', // Increased padding
  marginBottom: '24px', // Increased spacing between sections
};

const footerSectionStyle = {
    ...sectionStyle,
    padding: '24px', // Slightly less padding for footer
}

const headerSectionStyle = {
  padding: '32px 0', // Padding top/bottom for logo
};

const hrStyle = {
    border: 'none',
    borderTop: `1px solid #eaeaea`,
    margin: '26px 0',
    width: '100%',
}

// --- Component ---
export const UnipackLaunchEmailRevised = () => {
  return (
    <Html>
      <Head />
      <Preview>
        Unipack Corrugated enters India: Advanced board plants & support ecosystem.
      </Preview>
      <Body style={{ margin: '0', padding: '0', backgroundColor: backgroundColor, width: '100%', WebkitTextSizeAdjust: '100%', MsTextSizeAdjust: '100%' }}>
        <Container style={containerStyle}>

          {/* Header Logo */}
          <Section style={headerSectionStyle}>
            <Row>
              <Column align="center">
                <Img
                  src={ASSETS.logo}
                  alt="UNIPACK"
                  width="160" // Slightly smaller logo
                  height="36" // Adjust height proportionally
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </Column>
            </Row>
          </Section>

          {/* Hero Section */}
          <Section style={sectionStyle}>
            <Row>
              <Column>
                <Heading
                  as="h1" // Use semantic heading levels
                  style={{
                    ...baseTextStyles,
                    fontSize: '32px', // Larger main heading
                    color: brandColor, // Keep brand color for main title
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '24px', // More space below heading
                  }}
                >
                  UniPack Launches for India Market
                </Heading>
                <Img
                  src={ASSETS.hero}
                  width="100%"
                  alt="Unipack Corrugated Board Plant"
                  style={{ display: 'block', marginBottom: '24px', borderRadius: '8px' }} // Rounded corners for image
                />
                <Text
                  style={{
                    ...baseTextStyles,
                    fontSize: '16px',
                    color: secondaryTextColor, // Softer color for description
                    textAlign: 'center',
                    marginBottom: '32px', // More space before button
                  }}
                >
                  Revolutionizing India's Corrugated Packaging Industry with World-Class Automation Solutions.
                  A strategic acquisition establishes Unipack as a comprehensive partner for India's dynamic packaging sector.
                </Text>
                <Row>
                  {/* Centering single button - can use align="center" on Column or a table */}
                  <Column align="center">
                     {/* Use a table for better button width control in email clients */}
                     <table cellPadding="0" cellSpacing="0" border="0" style={{ width: '220px', margin: '0 auto' }}>
                       <tr>
                         <td>
                            <Link href="https://unipack.asia/press-release" style={primaryButton}>
                                Read the Release
                            </Link>
                          </td>
                       </tr>
                     </table>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          {/* Automatic Board Plants Section */}
          <Section style={sectionStyle}>
            <Row>
              <Column>
                {/* Removed redundant UNICORR logo here */}
                <Heading
                    as="h2"
                    style={{
                        ...baseTextStyles,
                        fontSize: '26px', // Slightly smaller section heading
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '8px',
                    }}
                >
                  Automatic Board Plants
                </Heading>
                <Text
                  style={{
                    ...baseTextStyles,
                    fontSize: '18px',
                    color: secondaryTextColor,
                    fontWeight: '600', // Semi-bold for emphasis
                    textAlign: 'center',
                    marginBottom: '24px',
                  }}
                >
                  India's Fastest Board Line
                </Text>
                <Img
                  src={ASSETS.boardPlant}
                  width="100%"
                  alt="Unipack Automatic Board Plant"
                  style={{ display: 'block', borderRadius: '8px' }}
                />
              </Column>
            </Row>
          </Section>

          {/* --- Product Sections (Pro & Smart Lines) --- */}
          {/* Refactored structure for consistency */}

          {/* Pro Line Section */}
          <Section style={sectionStyle}>
            <Row>
              <Column>
                {/* Removed redundant UNICORR logo */}
                 <Img
                  src={ASSETS.proLine}
                  width="100%"
                  alt="Pro Line Diagram"
                  style={{ display: 'block', marginBottom: '24px', borderRadius: '8px' }}
                />
                <Heading as="h3" style={{ ...baseTextStyles, fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                  Pro Line - 180 Series
                </Heading>

                {/* Specs Table */}
                <table cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ marginBottom: '32px', textAlign: 'center' }}>
                  <tr>
                    {/* Column 1 */}
                    <td align="center" valign="top" style={{ padding: '0 8px 16px 0', width: '33%' }}>
                      <Text style={{ ...baseTextStyles, fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
                        180m/min.
                      </Text>
                      <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor }}>
                        Design Speed
                      </Text>
                    </td>
                    {/* Column 2 */}
                    <td align="center" valign="top" style={{ padding: '0 8px 16px 0', width: '33%' }}>
                      <Text style={{ ...baseTextStyles, fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
                        160m/min
                      </Text>
                      <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor }}>
                        Working Speed
                      </Text>
                    </td>
                    {/* Column 3 */}
                    <td align="center" valign="top" style={{ padding: '0 0 16px 0', width: '33%' }}>
                      <Text style={{ ...baseTextStyles, fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
                        3500 tonnes
                      </Text>
                      <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor }}>
                        Monthly Tonnage
                      </Text>
                    </td>
                  </tr>
                </table>

                {/* Button Row Table */}
                <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                  <tr>
                    <td width="48%" style={{ paddingRight: '4%' }}> {/* Adjusted width and padding */}
                      <Link href="https://unipack.asia/quote/proline-180" style={secondaryButton}>
                        Get Quote
                      </Link>
                    </td>
                    <td width="48%">
                      <Link href="https://unipack.asia/catalog/proline-180" style={secondaryButton}>
                        Download Catalog
                      </Link>
                    </td>
                  </tr>
                </table>
              </Column>
            </Row>
          </Section>

          {/* Smart Line 150 Section */}
          <Section style={sectionStyle}>
            <Row>
              <Column>
                 <Img
                  src={ASSETS.smartLine150}
                  width="100%"
                  alt="Smart Line 150 Diagram"
                  style={{ display: 'block', marginBottom: '24px', borderRadius: '8px' }}
                />
                <Heading as="h3" style={{ ...baseTextStyles, fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                  Smart Line - 150 Series
                </Heading>

                {/* Specs Table */}
                <table cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ marginBottom: '32px', textAlign: 'center' }}>
                   <tr>
                    {/* Column 1 */}
                    <td align="center" valign="top" style={{ padding: '0 8px 16px 0', width: '33%' }}>
                      <Text style={{ ...baseTextStyles, fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
                        150m/min.
                      </Text>
                      <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor }}>
                        Design Speed
                      </Text>
                    </td>
                    {/* Column 2 */}
                    <td align="center" valign="top" style={{ padding: '0 8px 16px 0', width: '33%' }}>
                      <Text style={{ ...baseTextStyles, fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
                        130m/min
                      </Text>
                      <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor }}>
                        Working Speed
                      </Text>
                    </td>
                    {/* Column 3 */}
                    <td align="center" valign="top" style={{ padding: '0 0 16px 0', width: '33%' }}>
                      <Text style={{ ...baseTextStyles, fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
                        2100 tonnes
                      </Text>
                      <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor }}>
                        Monthly Tonnage
                      </Text>
                    </td>
                  </tr>
                </table>

                {/* Button Row Table */}
                <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                  <tr>
                    <td width="48%" style={{ paddingRight: '4%' }}>
                      <Link href="https://unipack.asia/quote/smartline-150" style={secondaryButton}>
                        Get Quote
                      </Link>
                    </td>
                    <td width="48%">
                      <Link href="https://unipack.asia/catalog/smartline-150" style={secondaryButton}>
                        Download Catalog
                      </Link>
                    </td>
                  </tr>
                </table>
              </Column>
            </Row>
          </Section>

          {/* Smart Line 120 Section */}
          <Section style={sectionStyle}>
            <Row>
              <Column>
                 <Img
                  src={ASSETS.smartLine120}
                  width="100%"
                  alt="Smart Line 120 Diagram"
                  style={{ display: 'block', marginBottom: '24px', borderRadius: '8px' }}
                />
                <Heading as="h3" style={{ ...baseTextStyles, fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                  Smart Line - 120 Series
                </Heading>

                {/* Specs Table */}
                 <table cellPadding="0" cellSpacing="0" border="0" width="100%" style={{ marginBottom: '32px', textAlign: 'center' }}>
                   <tr>
                    {/* Column 1 */}
                    <td align="center" valign="top" style={{ padding: '0 8px 16px 0', width: '33%' }}>
                      <Text style={{ ...baseTextStyles, fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
                        120m/min.
                      </Text>
                      <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor }}>
                        Design Speed
                      </Text>
                    </td>
                    {/* Column 2 */}
                    <td align="center" valign="top" style={{ padding: '0 8px 16px 0', width: '33%' }}>
                      <Text style={{ ...baseTextStyles, fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
                        100m/min
                      </Text>
                      <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor }}>
                        Working Speed
                      </Text>
                    </td>
                    {/* Column 3 */}
                    <td align="center" valign="top" style={{ padding: '0 0 16px 0', width: '33%' }}>
                      <Text style={{ ...baseTextStyles, fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>
                        1350 tonnes
                      </Text>
                      <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor }}>
                        Monthly Tonnage
                      </Text>
                    </td>
                  </tr>
                </table>

                {/* Button Row Table */}
                <table cellPadding="0" cellSpacing="0" border="0" width="100%">
                   <tr>
                    <td width="48%" style={{ paddingRight: '4%' }}>
                      <Link href="https://unipack.asia/quote/smartline-120" style={secondaryButton}>
                        Get Quote
                      </Link>
                    </td>
                    <td width="48%">
                      <Link href="https://unipack.asia/catalog/smartline-120" style={secondaryButton}>
                        Download Catalog
                      </Link>
                    </td>
                  </tr>
                </table>
              </Column>
            </Row>
          </Section>

          {/* Spare Parts Section */}
          <Section style={sectionStyle}>
            <Row>
              <Column>
                <Img
                  src={ASSETS.spareParts}
                  width="100%"
                  alt="Spare Parts"
                  style={{ display: 'block', marginBottom: '24px', borderRadius: '8px' }}
                />
                <Img
                  src={ASSETS.uniSupportLogo}
                  width="140"
                  alt="UNISUPPORT"
                  style={{ display: 'block', margin: '0 auto 16px auto' }}
                />
                <Heading as="h2" style={{ ...baseTextStyles, fontSize: '26px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>
                  Genuine Spare Parts
                </Heading>
                <Text style={{ ...baseTextStyles, fontSize: '18px', color: secondaryTextColor, fontWeight: '600', textAlign: 'center', marginBottom: '16px' }}>
                  Online Directory of High-Quality Spare Parts
                </Text>
                <Text style={{ ...baseTextStyles, fontSize: '14px', color: secondaryTextColor, textAlign: 'center', marginBottom: '32px' }}>
                  Genuine components engineered to maximize performance and minimize downtime. Our dedicated logistics ensure critical components arrive swiftly.
                </Text>
                 <Row>
                  <Column align="center">
                    <table cellPadding="0" cellSpacing="0" border="0" style={{ width: '200px', margin: '0 auto' }}>
                       <tr>
                         <td>
                            <Link href="https://unipack.asia/parts" style={secondaryButton}>
                                Explore Parts
                            </Link>
                         </td>
                       </tr>
                    </table>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          {/* Global Support Section */}
          <Section style={sectionStyle}>
            <Row>
              <Column>
                <Img
                  src={ASSETS.worldMap}
                  width="100%"
                  alt="World Map highlighting Support Infrastructure"
                  style={{ display: 'block', marginBottom: '24px', borderRadius: '8px' }}
                />
                 <Heading as="h2" style={{ ...baseTextStyles, fontSize: '26px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>
                  Unparalleled Support
                </Heading>
                <Text style={{ ...baseTextStyles, fontSize: '18px', color: secondaryTextColor, fontWeight: '600', textAlign: 'center', marginBottom: '16px' }}>
                  48-Hour Support Guarantee
                </Text>
                <Text style={{ ...baseTextStyles, fontSize: '14px', color: secondaryTextColor, textAlign: 'center', marginBottom: '32px' }}>
                  With strategic regional centers across India, expert technical assistance is always close by. Benefit from our training academy and IoT-enabled maintenance.
                </Text>
                 <Row>
                  <Column align="center">
                    <table cellPadding="0" cellSpacing="0" border="0" style={{ width: '200px', margin: '0 auto' }}>
                       <tr>
                          <td>
                            <Link href="https://unipack.asia/support" style={secondaryButton}>
                                Learn More
                            </Link>
                          </td>
                       </tr>
                    </table>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          {/* Footer Section */}
          <Section style={footerSectionStyle}>
             <Container>
               <Row>
                  <Column align="center">
                    <Text style={{ ...baseTextStyles, fontSize: '14px', fontWeight: '600', color: mainTextColor, marginBottom: '20px' }}>
                      UniPack Corrugated (I) Private Limited
                    </Text>
                  </Column>
                </Row>
                {/* Social Links Table */}
                <Row>
                   <Column align="center">
                      <table cellPadding="0" cellSpacing="0" border="0" align="center" style={{ marginBottom: '24px' }}>
                        <tr>
                           {/* Add more spacing between icons */}
                          <td style={{ padding: '0 10px' }}>
                            <Link href="https://www.facebook.com/unipack"> {/* Replace with actual links */}
                              <Img src={ASSETS.socialFacebook} width="24" height="24" alt="Facebook" />
                            </Link>
                          </td>
                          <td style={{ padding: '0 10px' }}>
                            <Link href="https://www.twitter.com/unipack">
                              <Img src={ASSETS.socialTwitter} width="24" height="24" alt="Twitter" />
                            </Link>
                          </td>
                          <td style={{ padding: '0 10px' }}>
                            <Link href="https://www.linkedin.com/company/unipack">
                              <Img src={ASSETS.socialLinkedin} width="24" height="24" alt="LinkedIn" />
                            </Link>
                          </td>
                          <td style={{ padding: '0 10px' }}>
                            <Link href="https://www.instagram.com/unipack">
                              <Img src={ASSETS.socialInstagram} width="24" height="24" alt="Instagram" />
                            </Link>
                          </td>
                          <td style={{ padding: '0 10px' }}>
                            {/* Ensure this YouTube link is correct */}
                            <Link href="https://youtube.com/YourChannel"> 
                              <Img src={ASSETS.socialYoutube} width="24" height="24" alt="YouTube" />
                            </Link>
                          </td>
                        </tr>
                      </table>
                   </Column>
                </Row>
                {/* Address and Contact */}
                <Row>
                  <Column align="center">
                    <Text style={{ ...baseTextStyles, fontSize: '12px', color: lightTextColor, marginBottom: '5px' }}>
                      Plot No. L-148 & 149, Verna Industrial Estate, Verna - Goa. 403722
                    </Text>
                    <Link href="mailto:hello@unipack.asia" style={{ ...baseTextStyles, fontSize: '12px', color: brandColor, textDecoration: 'none' }}>
                      hello@unipack.asia
                    </Link>
                  </Column>
                </Row>
                 {/* Separator and Unsubscribe */}
                <Row style={{ marginTop: '24px' }}>
                  <Column align="center">
                    <Hr style={hrStyle} />
                    <Text style={{ ...baseTextStyles, fontSize: '11px', color: lightTextColor }}>
                      No longer want to receive these emails?{' '}
                      <Link
                        href="https://unipack.asia/unsubscribe?email={{email}}" // Ensure {{email}} is replaced by your ESP
                        style={{ color: brandColor, textDecoration: 'underline' }} // Underline for clarity
                      >
                        Unsubscribe
                      </Link>
                    </Text>
                  </Column>
                </Row>
             </Container>
          </Section>

        </Container>
      </Body>
    </Html>
  );
};

// No need for default export if you plan to use it directly
// export default UnipackLaunchEmailRevised;