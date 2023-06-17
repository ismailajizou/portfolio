import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  body: string;
}

export const EmailTemplate = ({ body, name }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body
        className='bg-black text-white'
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <Container>
          <Heading className='text-bold text-lg'>Name: {name}</Heading>
          <Section>
            <Text>{body}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
