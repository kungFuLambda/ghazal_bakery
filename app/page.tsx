"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Box,
  Anchor,
  Divider,
  Center,
  SimpleGrid,
  ActionIcon,
} from "@mantine/core";
import { Navbar } from "@/components/Navbar";
import { ImageSlider } from "@/components/ImageSlider";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMapPin,
} from "@tabler/icons-react";
import { colors, fonts } from "@/lib/theme";

export default function Home() {
  const whatsappNumber = "+962793337446";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;
  const instagramHandle = "zallepastry";
  const instagramLink = `https://instagram.com/${instagramHandle}`;

  return (
    <Box>
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Box
        py={{ base: 60, sm: 80, md: 120 }}
        style={{
          backgroundImage: "url('/marbleback.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container size="xl">
          <Stack align="center" gap="xl">
            <Stack align="center" gap="lg">
              <Title
                order={1}
                ta="center"
                fw={300}
                fz={{ base: "2.5rem", sm: "3.5rem", md: "4.5rem" }}
                style={{
                  fontFamily: fonts.heading,
                  lineHeight: 1.1,
                  color: "#1a1a1a",
                }}
              >
                Handcrafted Cakes
                <br />
                <Text component="span" inherit fw={400}>
                  Made with Love
                </Text>
              </Title>
              <Text
                size="lg"
                ta="center"
                maw={500}
                fw={400}
                lh={1.7}
                c="dark.6"
              >
                Contemporary pastries crafted with passion in Amman. Order
                online for delivery or pickup.
              </Text>
            </Stack>

            <Group gap="md" justify="center">
              <Button
                component="a"
                href={instagramLink}
                target="_blank"
                size="lg"
                radius="xl"
                variant="filled"
                bg="dark.8"
                c="white"
                fw={500}
                px={30}
                leftSection={<IconBrandInstagram size={20} />}
              >
                View Our Work
              </Button>
              <Button
                component="a"
                href={whatsappLink}
                target="_blank"
                size="lg"
                radius="xl"
                variant="outline"
                color="dark.8"
                fw={500}
                px={30}
                leftSection={<IconBrandWhatsapp size={20} />}
              >
                Order Now
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Image Slider Gallery */}
      <ImageSlider />

      {/* Contact Section */}
      <Box py={{ base: 60, md: 80 }} bg="gray.0">
        <Container size="xl">
          <Stack align="center" gap="xl">
            <Stack align="center" gap="md">
              <Title
                order={2}
                fz={{ base: "1.75rem", sm: "2rem", md: "2.5rem" }}
                fw={300}
                ta="center"
                style={{ fontFamily: fonts.heading }}
              >
                Get in Touch
              </Title>
              <Text
                size="lg"
                c="dimmed"
                ta="center"
                maw={500}
                fw={300}
                lh={1.6}
              >
                Ready to order? Reach out through Instagram or WhatsApp and
                let's create something sweet together.
              </Text>
            </Stack>

            {/* Contact Cards */}
            <SimpleGrid
              cols={{ base: 1, sm: 3 }}
              spacing={{ base: "lg", md: "xl" }}
              w="100%"
              maw={800}
            >
              {/* Instagram */}
              <Stack
                align="center"
                gap="md"
                p="xl"
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  border: "1px solid #e9ecef",
                }}
              >
                <ActionIcon
                  size={60}
                  radius="xl"
                  variant="filled"
                  bg={colors.primary}
                  c="dark.8"
                >
                  <IconBrandInstagram size={30} />
                </ActionIcon>
                <Stack gap={4} align="center">
                  <Text fw={500} size="md">
                    Instagram
                  </Text>
                  <Anchor
                    href={instagramLink}
                    target="_blank"
                    c="dimmed"
                    size="sm"
                    fw={400}
                  >
                    @{instagramHandle}
                  </Anchor>
                </Stack>
              </Stack>

              {/* WhatsApp */}
              <Stack
                align="center"
                gap="md"
                p="xl"
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  border: "1px solid #e9ecef",
                }}
              >
                <ActionIcon
                  size={60}
                  radius="xl"
                  variant="filled"
                  bg={colors.primary}
                  c="dark.8"
                >
                  <IconBrandWhatsapp size={30} />
                </ActionIcon>
                <Stack gap={4} align="center">
                  <Text fw={500} size="md">
                    WhatsApp
                  </Text>
                  <Anchor
                    href={whatsappLink}
                    target="_blank"
                    c="dimmed"
                    size="sm"
                    fw={400}
                  >
                    +962 79 333 7446
                  </Anchor>
                </Stack>
              </Stack>

              {/* Location */}
              <Stack
                align="center"
                gap="md"
                p="xl"
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  border: "1px solid #e9ecef",
                }}
              >
                <ActionIcon
                  size={60}
                  radius="xl"
                  variant="filled"
                  bg={colors.primary}
                  c="dark.8"
                >
                  <IconMapPin size={30} />
                </ActionIcon>
                <Stack gap={4} align="center">
                  <Text fw={500} size="md">
                    Location
                  </Text>
                  <Text c="dimmed" size="sm" fw={400}>
                    Amman, Jordan
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>

            {/* Order Note */}
            <Text size="sm" c="dimmed" ta="center" maw={400} mt="md">
              We take orders online only. Message us for more information or
              details or browse our selection of pastries.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={{ base: 30, md: 50 }} bg="white">
        <Container size="xl">
          <Divider mb="xl" color="gray.3" />

          {/* Mobile Footer */}
          <Stack gap="lg" hiddenFrom="sm" align="center">
            <Title
              order={3}
              size="lg"
              fw={400}
              style={{ fontFamily: fonts.heading }}
              c={colors.primary}
            >
              Zallè Patisserie
            </Title>
            <Group gap="lg">
              <ActionIcon
                component="a"
                href={instagramLink}
                target="_blank"
                size="lg"
                variant="subtle"
                color="gray"
              >
                <IconBrandInstagram size={22} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href={whatsappLink}
                target="_blank"
                size="lg"
                variant="subtle"
                color="gray"
              >
                <IconBrandWhatsapp size={22} />
              </ActionIcon>
            </Group>
            <Group gap="md">
              <Anchor href="/menu" c="dimmed" size="sm">
                Menu
              </Anchor>
              <Anchor href="/about" c="dimmed" size="sm">
                About
              </Anchor>
              <Anchor href="/contact" c="dimmed" size="sm">
                Contact
              </Anchor>
            </Group>
          </Stack>

          {/* Desktop Footer */}
          <Group justify="space-between" align="center" visibleFrom="sm">
            <Title
              order={3}
              size="lg"
              fw={400}
              style={{ fontFamily: fonts.heading }}
              c={colors.primary}
            >
              Zallè Patisserie
            </Title>

            <Group gap="xl">
              <Anchor href="/menu" c="dimmed" size="sm">
                Menu
              </Anchor>
              <Anchor href="/about" c="dimmed" size="sm">
                About
              </Anchor>
              <Anchor href="/contact" c="dimmed" size="sm">
                Contact
              </Anchor>
            </Group>

            <Group gap="md">
              <ActionIcon
                component="a"
                href={instagramLink}
                target="_blank"
                size="lg"
                variant="subtle"
                color="gray"
              >
                <IconBrandInstagram size={22} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href={whatsappLink}
                target="_blank"
                size="lg"
                variant="subtle"
                color="gray"
              >
                <IconBrandWhatsapp size={22} />
              </ActionIcon>
            </Group>
          </Group>

          <Divider my="xl" color="gray.3" />
          <Center>
            <Text size="xs" c="dimmed">
              © 2026 Zallè Patisserie. Amman, Jordan. All rights reserved.
            </Text>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}
