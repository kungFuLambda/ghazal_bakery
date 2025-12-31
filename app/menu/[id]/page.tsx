"use client";

import {
  Container,
  Title,
  Text,
  Group,
  Stack,
  Badge,
  Box,
  Anchor,
  Divider,
  Center,
  Image,
  Button,
  Card,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Navbar } from "@/components/Navbar";
import { IconBrandInstagram, IconPhone, IconArrowLeft } from "@tabler/icons-react";
import { colors, fonts } from "@/lib/theme";
import { products, getProductById } from "../menu";
import { useParams, useRouter } from "next/navigation";
import { notFound } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const productId = Number(params.id);

  const product = getProductById(productId);

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
              border: "1px solid var(--mantine-color-gray-3)",
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
                  border: "1px solid var(--mantine-color-gray-3)",
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
                    h={{ base: 250, sm: 350, md: 400 }}
                    fit="cover"
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Card>

          {/* Product Details */}
          <Stack gap="lg">
            <Stack gap="xs">
              <Badge
                variant="light"
                color={colors.primary}
                size="lg"
                radius="sm"
              >
                {product.category}
              </Badge>
              <Title
                order={1}
                fz={{ base: "1.75rem", sm: "2rem", md: "2.5rem" }}
                fw={300}
                style={{ fontFamily: fonts.heading }}
              >
                {product.name}
              </Title>
              <Text fz={{ base: "1.5rem", md: "2rem" }} fw={600} c={colors.primary}>
                JOD {product.price.toFixed(2)}
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
              marginTop: "2rem",
            }}
          >
            <Stack align="center" gap="lg">
              <Title
                order={2}
                fz={{ base: "1.25rem", md: "1.5rem" }}
                ta="center"
                c="dark"
                fw={400}
                style={{ fontFamily: fonts.heading }}
              >
                Interested in this item?
              </Title>
              <Text c="dark" ta="center" size="md" maw={500}>
                Contact us to place an order or ask any questions about our{" "}
                {product.name.toLowerCase()}.
              </Text>
              <Stack gap="md" w="100%" maw={400} hiddenFrom="sm">
                <Button
                  component="a"
                  href="https://instagram.com/zallepastry"
                  target="_blank"
                  variant="white"
                  color="dark"
                  size="lg"
                  radius="xl"
                  fullWidth
                  leftSection={<IconBrandInstagram size={20} />}
                >
                  @zallepastry
                </Button>
                <Button
                  component="a"
                  href="tel:+962793337446"
                  variant="outline"
                  color="dark"
                  size="lg"
                  radius="xl"
                  fullWidth
                  leftSection={<IconPhone size={20} />}
                >
                  +962 79 333 7446
                </Button>
              </Stack>
              <Group gap="md" visibleFrom="sm">
                <Button
                  component="a"
                  href="https://instagram.com/zallepastry"
                  target="_blank"
                  variant="white"
                  color="dark"
                  size="lg"
                  radius="xl"
                  leftSection={<IconBrandInstagram size={20} />}
                >
                  @zallepastry
                </Button>
                <Button
                  component="a"
                  href="tel:+962793337446"
                  variant="outline"
                  color="dark"
                  size="lg"
                  radius="xl"
                  leftSection={<IconPhone size={20} />}
                >
                  +962 79 333 7446
                </Button>
              </Group>
            </Stack>
          </Card>
        </Stack>
      </Container>

      {/* Footer */}
      <Container size="xl" py={{ base: 30, md: 50 }}>
        <Divider my="xl" color="gray.4" />
        <Stack gap="xl" hiddenFrom="sm">
          <Stack gap="sm" align="center">
            <Title
              order={3}
              size="xl"
              fw={400}
              style={{ fontFamily: fonts.heading }}
              c={colors.primary}
            >
              Zallè Patisserie
            </Title>
            <Text size="sm" c="dimmed">
              Artisan delights since 1985
            </Text>
          </Stack>
          <Group justify="center" gap="xl">
            <Stack gap="xs" align="center">
              <Text fw={500} size="sm">
                Quick Links
              </Text>
              <Anchor href="/menu" c="dimmed" size="sm">
                Menu
              </Anchor>
              <Anchor href="/about" c="dimmed" size="sm">
                About
              </Anchor>
              <Anchor href="/contact" c="dimmed" size="sm">
                Contact
              </Anchor>
            </Stack>
            <Stack gap="xs" align="center">
              <Text fw={500} size="sm">
                Contact
              </Text>
              <Anchor
                href="https://instagram.com/zallepastry"
                target="_blank"
                c="dimmed"
                size="sm"
              >
                @zallepastry
              </Anchor>
              <Text c="dimmed" size="sm">
                +962 79 333 7446
              </Text>
            </Stack>
          </Group>
        </Stack>
        <Group justify="space-between" align="flex-start" visibleFrom="sm">
          <Stack gap="sm">
            <Title
              order={3}
              size="xl"
              fw={400}
              style={{ fontFamily: fonts.heading }}
              c={colors.primary}
            >
              Zallè Patisserie
            </Title>
            <Text size="sm" c="dimmed">
              Artisan delights since 1985
            </Text>
          </Stack>

          <Group gap="xl">
            <Stack gap="xs">
              <Text fw={500} size="sm">
                Quick Links
              </Text>
              <Anchor href="/menu" c="dimmed" size="sm">
                Menu
              </Anchor>
              <Anchor href="/about" c="dimmed" size="sm">
                About
              </Anchor>
              <Anchor href="/contact" c="dimmed" size="sm">
                Contact
              </Anchor>
            </Stack>
            <Stack gap="xs">
              <Text fw={500} size="sm">
                Contact
              </Text>
              <Anchor
                href="https://instagram.com/zallepastry"
                target="_blank"
                c="dimmed"
                size="sm"
              >
                @zallepastry
              </Anchor>
              <Text c="dimmed" size="sm">
                +962 79 333 7446
              </Text>
            </Stack>
          </Group>
        </Group>

        <Divider my="xl" color="gray.4" />
        <Center>
          <Text size="sm" c="dimmed">
            © 2025 Zallè Patisserie. All rights reserved.
          </Text>
        </Center>
      </Container>
    </Box>
  );
}
