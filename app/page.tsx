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
  ActionIcon,
  Flex,
  Image,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import {
  IconShoppingBag,
  IconUser,
  IconCake,
  IconCoffee,
  IconBread,
  IconStar,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <Box>
      {/* Navigation Header */}
      <Container size="xl" py="md">
        <Flex justify="space-between" align="center">
          <Title
            order={1}
            size="2rem"
            fw={400}
            style={{ fontFamily: "var(--font-playfair)" }}
            c="#B28BC2"
          >
            Zallè Patisserie
          </Title>
          <Group gap="xl">
            <Anchor c="dimmed" size="sm" fw={500}>
              Shop
            </Anchor>
            <Anchor c="dimmed" size="sm" fw={500}>
              About
            </Anchor>
            <Anchor c="dimmed" size="sm" fw={500}>
              Contact
            </Anchor>
            <Group gap="sm">
              <ActionIcon variant="subtle" color="gray" size="lg">
                <IconShoppingBag size={20} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="gray" size="lg">
                <IconUser size={20} />
              </ActionIcon>
            </Group>
          </Group>
        </Flex>
      </Container>

      {/* Image Carousel */}
      <Container size="lg" pt="xl">
        <Carousel
          withIndicators
          slideSize="100%"
          slideGap="md"
          styles={{
            indicator: {
              width: 12,
              height: 4,
              transition: "width 250ms ease",
              backgroundColor: "#B28BC2",
              opacity: 0.3,
              "&[data-active]": {
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
              radius="lg"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src="/images/croissant.jpg"
              alt="Fresh Baked Goods"
              height={400}
              fit="cover"
              radius="lg"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src="/images/croissant.jpg"
              alt="Master Baker at Work"
              height={400}
              fit="cover"
              radius="lg"
            />
          </Carousel.Slide>
        </Carousel>
      </Container>

      {/* Hero Section */}
      <Container size="xl" py={100}>
        <Stack align="center" gap={50}>
          <Stack align="center" gap="lg">
            <Badge
              variant="outline"
              color="#B28BC2"
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
                fontFamily: "var(--font-playfair)",
                lineHeight: 1.2,
                maxWidth: "800px",
              }}
            >
              Where Every Bite Tells a Story of
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "#B28BC2", to: "#DFC5FE", deg: 45 }}
                fw={400}
              >
                {" "}
                Perfection
              </Text>
            </Title>
            <Text size="xl" c="dimmed" ta="center" maw={600} fw={300} lh={1.6}>
              Discover the finest handcrafted pastries, artisan breads, and
              exquisite desserts made with premium ingredients and generations
              of baking expertise.
            </Text>
          </Stack>

          <Group gap="lg">
            <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: "#B28BC2", to: "#DFC5FE", deg: 45 }}
              c="white"
              fw={500}
              px={40}
            >
              Explore Our Collection
            </Button>
            <Button
              size="lg"
              radius="xl"
              variant="outline"
              color="#B28BC2"
              fw={400}
              px={40}
            >
              Visit Our Café
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
                style={{ fontFamily: "var(--font-playfair)" }}
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
                  <IconCake size={40} color="#B28BC2" />
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
                <Group justify="center" gap="xs">
                  <IconStar size={16} color="#B28BC2" />
                  <IconStar size={16} color="#B28BC2" />
                  <IconStar size={16} color="#B28BC2" />
                  <IconStar size={16} color="#DFC5FE" />
                  <IconStar size={16} color="#DFC5FE" />
                </Group>
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
                  <IconBread size={40} color="#B28BC2" />
                </Center>
                <Stack gap="xs" align="center">
                  <Title order={3} size="xl" fw={400} ta="center">
                    Artisan Breads
                  </Title>
                  <Text c="dimmed" ta="center" size="sm">
                    Fresh daily breads using traditional techniques and locally
                    sourced organic flour
                  </Text>
                </Stack>
                <Group justify="center" gap="xs">
                  <IconStar size={16} color="#B28BC2" />
                  <IconStar size={16} color="#B28BC2" />
                  <IconStar size={16} color="#B28BC2" />
                  <IconStar size={16} color="#DFC5FE" />
                  <IconStar size={16} color="#DFC5FE" />
                </Group>
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
                  <IconCoffee size={40} color="#B28BC2" />
                </Center>
                <Stack gap="xs" align="center">
                  <Title order={3} size="xl" fw={400} ta="center">
                    Pastries & Coffee
                  </Title>
                  <Text c="dimmed" ta="center" size="sm">
                    Delicate pastries paired with ethically sourced, perfectly
                    roasted coffee blends
                  </Text>
                </Stack>
                <Group justify="center" gap="xs">
                  <IconStar size={16} color="#B28BC2" />
                  <IconStar size={16} color="#B28BC2" />
                  <IconStar size={16} color="#B28BC2" />
                  <IconStar size={16} color="#DFC5FE" />
                  <IconStar size={16} color="#DFC5FE" />
                </Group>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

      {/* About Section */}
      <Container size="xl" py={80}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={80}>
          <Stack gap="xl">
            <Stack gap="md">
              <Title
                order={2}
                size="2.5rem"
                fw={300}
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Story
              </Title>
              <Text size="lg" c="dimmed" lh={1.7}>
                Founded in 1985, Zallè Patisserie has been a cornerstone of
                artisanal baking, blending time-honored traditions with modern
                innovation. Every morning, our master bakers begin their craft
                before dawn, ensuring each creation meets our uncompromising
                standards.
              </Text>
              <Text size="lg" c="dimmed" lh={1.7}>
                We source only the finest ingredients from trusted local
                suppliers and international partners, believing that exceptional
                quality starts with exceptional ingredients.
              </Text>
            </Stack>
            <Button
              variant="outline"
              color="#B28BC2"
              size="md"
              radius="xl"
              w="fit-content"
              fw={400}
            >
              Learn More About Us
            </Button>
          </Stack>

          <Card
            radius="lg"
            p="xl"
            bg="gray.0"
            style={{ border: "1px solid var(--mantine-color-gray-3)" }}
          >
            <Stack gap="lg">
              <Title order={3} size="xl" fw={400} c="#B28BC2">
                Why Choose Ghazal?
              </Title>
              <Stack gap="md">
                <Text fw={500}>✨ Handcrafted Excellence</Text>
                <Text fw={500}>🌾 Premium Organic Ingredients</Text>
                <Text fw={500}>👨‍🍳 Master Baker Expertise</Text>
                <Text fw={500}>🏆 Award-Winning Recipes</Text>
                <Text fw={500}>💝 Custom Orders Welcome</Text>
              </Stack>
            </Stack>
          </Card>
        </SimpleGrid>
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
              style={{ fontFamily: "var(--font-playfair)" }}
              c="#B28BC2"
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
              <Anchor c="dimmed" size="sm">
                Shop
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
