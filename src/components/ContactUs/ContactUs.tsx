import React from 'react';
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  Box,
  Space,
} from '@mantine/core';
import { IconAt, IconPhone, IconMapPins } from '@tabler/icons';
import './ContactUs.css';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors.gray[5]} 0%, ${theme.colors.gray[8]} 100%)`,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 2,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
    textAlign: 'left',
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },

  iconList: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  emailContact: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
    cursor: 'pointer',

    '& .icons': {
      marginRight: theme.spacing.xs,
    },
  },

  phoneContact: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
    cursor: 'pointer',

    '& .icons': {
      marginRight: theme.spacing.xs,
    },
  },
}));

export function ContactUs() {
  const { classes } = useStyles();

  const handleEmailClick = () => {
    window.location.href = 'mailto:Sampark@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+912569751165';
  };

  return (
    <div className={classes.wrapper} id="contact">
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      >
        <Box className={classes.iconList}>
          <Title align="left" className={classes.title}>
            Contact us
          </Title>
          <Text align="left" className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <div className={classes.emailContact} onClick={handleEmailClick}>
            <IconAt color="#fff" className="icons" /> Sampark@gmail.com
          </div>
          <Space h="md" />
          <div className={classes.phoneContact} onClick={handlePhoneClick}>
            <IconPhone color="#fff" className="icons" /> +91 2569751165
          </div>
          <Space h="md" />
          <div className="map_contactUs">
            <IconMapPins color="#fff" className="icons" /> IET LUCKNOW Sitapur Road Lucknow
          </div>
        </Box>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <Button className={classes.control}>Send message</Button>
          </Group>
        </div>
      </SimpleGrid>
    </div>
  );
}
