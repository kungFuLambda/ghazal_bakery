"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Card,
  SimpleGrid,
  Badge,
  Box,
  Anchor,
  Divider,
  Center,
  Image,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Navbar } from "@/components/Navbar";
import { IconCake, IconCoffee, IconBread } from "@tabler/icons-react";
import { colors, gradients, fonts } from "@/lib/theme";

export default function Home() {
  return (
    <Box>
      {/* Navigation Header */}
      <Navbar />

      {/* Image Carousel */}
      <Box>
        <Carousel
          withIndicators
          slideSize="100%"
          slideGap="md"
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: "width 250ms ease",
              backgroundColor: colors.primary,
              opacity: 0.3,
              "&[dataActive]": {
                opacity: 1,
                width: 40,
              },
            },
          }}
        >
          <Carousel.Slide>
            <Image
              src="/images/glaze2.jpg"
              alt="Artisan Bakery Interior"
              height={400}
              fit="cover"
              radius={0}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src="/images/croissant.jpg"
              alt="Fresh Baked Goods"
              height={400}
              fit="cover"
              radius={0}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src="/images/croissant.jpg"
              alt="Master Baker at Work"
              height={400}
              fit="cover"
              radius={0}
            />
          </Carousel.Slide>
        </Carousel>
      </Box>

      {/* Hero Section */}
      <Container size="xl" py={100}>
        <Stack align="center" gap={50}>
          <Stack align="center" gap="lg">
            <Badge
              variant="outline"
              color={colors.primary}
              size="lg"
              radius="xl"
              fw={400}
            >
              Artisan Crafted Since 1985
            </Badge>
            <Title
              order={1}
              size="4rem"
              ta="center"
              fw={300}
              style={{
                fontFamily: fonts.heading,
                lineHeight: 1.2,
                maxWidth: "800px",
              }}
            >
              Where Every Bite Tells a Story of
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={gradients.primary}
                fw={400}
              >
                {" "}
                Perfection
              </Text>
            </Title>
            <Text size="xl" c="dimmed" ta="center" maw={600} fw={300} lh={1.6}>
              Discover the finest handcrafted pastries, and exquisite desserts
              made with premium ingredients.
            </Text>
          </Stack>

          <Group gap="lg">
            <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={gradients.primary}
              c="white"
              fw={500}
              px={40}
            >
              Explore Our Creations
            </Button>
          </Group>
        </Stack>
      </Container>

      {/* Featured Products */}
      <Container size="xl" py={80}>
        <Stack gap={50}>
          <Center>
            <Stack align="center" gap="md">
              <Title
                order={2}
                size="2.5rem"
                fw={300}
                style={{ fontFamily: fonts.heading }}
              >
                Signature Creations
              </Title>
              <Text size="lg" c="dimmed" ta="center" maw={500}>
                Each creation is a masterpiece, meticulously crafted with
                passion and the finest ingredients
              </Text>
            </Stack>
          </Center>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            <Card
              radius="lg"
              p="xl"
              bg="gray.0"
              style={{ border: "1px solid var(--mantine-color-gray-3)" }}
            >
              <Stack gap="md">
                <Center>
                  <IconCake size={40} color={colors.primary} />
                </Center>
                <Stack gap="xs" align="center">
                  <Title order={3} size="xl" fw={400} ta="center">
                    Artisan Cakes
                  </Title>
                  <Text c="dimmed" ta="center" size="sm">
                    Handcrafted celebration cakes made with premium Belgian
                    chocolate and organic ingredients
                  </Text>
                </Stack>
              </Stack>
            </Card>

            <Card
              radius="lg"
              p="xl"
              bg="gray.0"
              style={{ border: "1px solid var(--mantine-color-gray-3)" }}
            >
              <Stack gap="md">
                <Center>
                  <IconBread size={40} color={colors.primary} />
                </Center>
                <Stack gap="xs" align="center">
                  <Title order={3} size="xl" fw={400} ta="center">
                    Small treats
                  </Title>
                  <Text c="dimmed" ta="center" size="sm">
                    Fresh daily breads using traditional techniques and locally
                    sourced organic flour
                  </Text>
                </Stack>
              </Stack>
            </Card>

            <Card
              radius="lg"
              p="xl"
              bg="gray.0"
              style={{ border: "1px solid var(--mantine-color-gray-3)" }}
            >
              <Stack gap="md">
                <Center>
                  <IconCoffee size={40} color={colors.primary} />
                </Center>
                <Stack gap="xs" align="center">
                  <Title order={3} size="xl" fw={400} ta="center">
                    Pastries
                  </Title>
                  <Text c="dimmed" ta="center" size="sm">
                    Delicate pastries paired with ethically sourced, perfectly
                    roasted coffee blends
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Footer */}
      <Container size="xl" py={50}>
        <Divider my="xl" color="gray.4" />
        <Group justify="space-between" align="flex-start">
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
              The best
            </Text>
          </Stack>

          <Group gap="xl">
            <Stack gap="xs">
              <Text fw={500} size="sm">
                Quick Links
              </Text>
              <Anchor c="dimmed" size="sm">
                Menu
              </Anchor>
              <Anchor c="dimmed" size="sm">
                Cart
              </Anchor>
              <Anchor c="dimmed" size="sm">
                Account
              </Anchor>
            </Stack>
            <Stack gap="xs">
              <Text fw={500} size="sm">
                Contact
              </Text>
              <Text c="dimmed" size="sm">
                123 Baker Street
              </Text>
              <Text c="dimmed" size="sm">
                (555) 123-4567
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
