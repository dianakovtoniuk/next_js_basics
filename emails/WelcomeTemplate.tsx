import { Html, Body, Container, Text, Heading } from '@react-email/components';
import React from 'react';

interface Props {
    name?: string;
}

const WelcomeTemplate = ({ name }: Props) => {
    return (
        <Html>
            <Body>
                <Container>
                    <Heading>Welcome{name ? `, ${name}` : ''}!</Heading>
                    <Text>Thanks for registering. We're glad you're here.</Text>
                </Container>
            </Body>
        </Html>
    );
};

export default WelcomeTemplate;
