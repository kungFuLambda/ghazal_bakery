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
import { Navbar } from "@/components/Navbar";
import {
  IconShoppingBag,
  IconUser,
  IconPlus,
  IconMinus,
  IconShoppingCart,
} from "@tabler/icons-react";
import { useState } from "react";
import { colors, gradients, fonts } from "@/lib/theme";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Chocolate Croissant",
    description: "Buttery croissant filled with premium Belgian chocolate",
    price: 4.5,
    image: "/images/croissant.jpg",
    category: "Pastries",
  },
  {
    id: 2,
    name: "Glazed Donut",
    description: "Fresh glazed donut with our signature glaze",
    price: 3.25,
    image: "/images/glaze.jpg",
    category: "Donuts",
  },
  {
    id: 3,
    name: "Artisan Sourdough",
    description: "Handcrafted sourdough bread with crispy crust",
    price: 8.0,
    image: "/images/glaze2.jpg",
    category: "Breads",
  },
  {
    id: 4,
    name: "Almond Croissant",
    description: "Flaky croissant filled with sweet almond cream",
    price: 5.0,
    image: "/images/croissant.jpg",
    category: "Pastries",
  },
  {
    id: 5,
    name: "Chocolate Éclair",
    description: "Classic French éclair with chocolate glaze",
    price: 4.75,
    image: "/images/glaze.jpg",
    category: "Pastries",
  },
  {
    id: 6,
    name: "Cinnamon Roll",
    description: "Warm cinnamon roll with cream cheese frosting",
    price: 3.75,
    image: "/images/glaze2.jpg",
    category: "Pastries",
  },
];

export default function Shop() {
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (productId: number, quantity: number = 1) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity,
    }));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      const newCart = { ...cart };
      delete newCart[productId];
      setCart(newCart);
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
    }
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <Box>
      {/* Navigation Header */}
      <Navbar />

      {/* Page Header */}
      <Container size="xl" py={60}>
        <Stack align="center" gap="lg">
          <Badge
            variant="outline"
            color={colors.primary}
            size="lg"
            radius="xl"
            fw={400}
          >
            Fresh Daily Selection
          </Badge>
          <Title
            order={1}
            size="3rem"
            ta="center"
            fw={300}
            style={{ fontFamily: fonts.heading }}
          >
            Our Collection
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={600} fw={300} lh={1.6}>
            Discover our handcrafted selection of pastries, cakes, and sweet
            treats, made fresh daily with premium ingredients.
          </Text>
        </Stack>
      </Container>

      {/* Products Grid */}
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {products.map((product) => (
            <Card
              key={product.id}
              radius="lg"
              p={0}
              bg="gray.0"
              style={{
                border: "1px solid var(--mantine-color-gray-3)",
                overflow: "hidden",
              }}
            >
              <Stack gap={0}>
                <Image
                  src={product.image}
                  alt={product.name}
                  height={200}
                  fit="cover"
                  radius={0}
                />

                <Stack gap="md" p="lg">
                  <Stack gap="xs">
                    <Group justify="space-between" align="flex-start">
                      <Stack gap={4} flex={1}>
                        <Title order={3} size="lg" fw={500}>
                          {product.name}
                        </Title>
                        <Badge
                          variant="light"
                          color={colors.primary}
                          size="sm"
                          radius="sm"
                        >
                          {product.category}
                        </Badge>
                      </Stack>
                      <Text size="xl" fw={600} c={colors.primary}>
                        JOD{product.price.toFixed(2)}
                      </Text>
                    </Group>

                    <Text c="dimmed" size="sm" lh={1.5}>
                      {product.description}
                    </Text>
                  </Stack>

                  {cart[product.id] ? (
                    <Group justify="space-between" align="center">
                      <Group gap="xs">
                        <ActionIcon
                          variant="outline"
                          color={colors.primary}
                          size="sm"
                          onClick={() =>
                            updateQuantity(product.id, cart[product.id] - 1)
                          }
                        >
                          <IconMinus size={16} />
                        </ActionIcon>
                        <Text
                          fw={500}
                          size="sm"
                          style={{ minWidth: "20px", textAlign: "center" }}
                        >
                          {cart[product.id]}
                        </Text>
                        <ActionIcon
                          variant="outline"
                          color={colors.primary}
                          size="sm"
                          onClick={() =>
                            updateQuantity(product.id, cart[product.id] + 1)
                          }
                        >
                          <IconPlus size={16} />
                        </ActionIcon>
                      </Group>
                      <Button
                        variant="light"
                        color={colors.primary}
                        size="sm"
                        leftSection={<IconShoppingCart size={16} />}
                      >
                        In Cart
                      </Button>
                    </Group>
                  ) : (
                    <Button
                      variant="gradient"
                      gradient={gradients.primary}
                      c="white"
                      fw={500}
                      leftSection={<IconShoppingCart size={16} />}
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Card>
          ))}
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
              <Anchor href="/shop" c="dimmed" size="sm">
                Shop
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
