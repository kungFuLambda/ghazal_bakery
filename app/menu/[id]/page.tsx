"use client";

import {
  Container,
  Title,
  Text,
  Group,
  Stack,
  Box,
  Anchor,
  Divider,
  Center,
  Image,
  Button,
  Card,
  ActionIcon,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Navbar } from "@/components/Navbar";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconArrowLeft,
} from "@tabler/icons-react";
import { colors, fonts } from "@/lib/theme";
import { getProductById } from "../menu";
import { useParams, useRouter } from "next/navigation";
import { notFound } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const productId = Number(params.id);

  const product = getProductById(productId);

  const whatsappNumber = "+962793337446";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;
  const instagramHandle = "zallepastry";
  const instagramLink = `https://instagram.com/${instagramHandle}`;

  if (!product) {
    notFound();
  }

  return (
    <Box>
      {/* Navigation Header */}
      <Navbar />

      {/* Back Button */}
      <Container size="xl" py="md">
        <Button
          variant="subtle"
          color="gray"
          leftSection={<IconArrowLeft size={18} />}
          onClick={() => router.back()}
          style={{ fontWeight: 400 }}
        >
          Back to Menu
        </Button>
      </Container>

      {/* Product Content */}
      <Container size="xl" pb={60}>
        <Stack gap="xl">
          {/* Image Carousel */}
          <Card
            radius="lg"
            p={0}
            style={{
              overflow: "hidden",
              border: "1px solid #e9ecef",
            }}
          >
            <Carousel
              withIndicators
              styles={{
                root: {
                  height: "auto",
                },
                control: {
                  backgroundColor: "white",
                  border: "1px solid #e9ecef",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                },
                indicator: {
                  backgroundColor: colors.primary,
                  width: 12,
                  height: 12,
                  transition: "width 0.2s ease",
                  "&[data-active]": {
                    width: 24,
                  },
                },
              }}
            >
              {product.images.map((image, index) => (
                <Carousel.Slide key={index}>
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    h={{ base: 280, sm: 380, md: 450 }}
                    fit="cover"
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Card>

          {/* Product Details */}
          <Stack gap="lg">
            <Stack gap="sm">
              <Text size="sm" fw={500} c="dimmed" tt="uppercase" lts={0.5}>
                {product.category}
              </Text>
              <Title
                order={1}
                fz={{ base: "1.75rem", sm: "2rem", md: "2.5rem" }}
                fw={300}
                style={{ fontFamily: fonts.heading }}
              >
                {product.name}
              </Title>
              <Text fz={{ base: "1.5rem", md: "2rem" }} fw={600} c="dark.8">
                JOD {product.price.toFixed(0)}
              </Text>
            </Stack>

            <Text size="lg" c="dimmed" lh={1.8}>
              {product.longDescription}
            </Text>
          </Stack>

          {/* Contact CTA */}
          <Card
            radius="lg"
            p={{ base: "lg", md: "xl" }}
            bg={colors.primary}
            style={{
              marginTop: "1rem",
            }}
          >
            <Stack align="center" gap="lg">
              <Title
                order={2}
                fz={{ base: "1.25rem", md: "1.5rem" }}
                ta="center"
                c="dark.8"
                fw={400}
                style={{ fontFamily: fonts.heading }}
              >
                Ready to Order?
              </Title>
              <Text c="dark.6" ta="center" size="md" maw={500}>
                Message us on WhatsApp or Instagram to order this{" "}
                {product.name.toLowerCase()}.
              </Text>
              <Group gap="md">
                <Button
                  component="a"
                  href={instagramLink}
                  target="_blank"
                  variant="white"
                  color="dark"
                  size="lg"
                  radius="xl"
                  leftSection={<IconBrandInstagram size={20} />}
                >
                  Instagram
                </Button>
                <Button
                  component="a"
                  href={whatsappLink}
                  target="_blank"
                  variant="outline"
                  color="dark"
                  size="lg"
                  radius="xl"
                  leftSection={<IconBrandWhatsapp size={20} />}
                >
                  WhatsApp
                </Button>
              </Group>
            </Stack>
          </Card>
        </Stack>
      </Container>

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
