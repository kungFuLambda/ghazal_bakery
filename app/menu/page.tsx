"use client";

import {
  Container,
  Title,
  Text,
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
import { Navbar } from "@/components/Navbar";
import { colors, fonts } from "@/lib/theme";
import { products } from "./menu";

export default function Shop() {
  return (
    <Box>
      {/* Navigation Header */}
      <Navbar />

      {/* Page Header */}
      <Container size="xl" py={{ base: 40, md: 60 }}>
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
            fz={{ base: "2rem", sm: "2.5rem", md: "3rem" }}
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
              component="a"
              href={`/menu/${product.id}`}
              style={{
                border: "1px solid var(--mantine-color-gray-3)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Stack gap={0}>
                <Image
                  src={product.images[0]}
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
                </Stack>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
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
