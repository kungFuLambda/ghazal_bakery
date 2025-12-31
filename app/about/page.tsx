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
  Timeline,
  ThemeIcon,
} from "@mantine/core";
import { Navbar } from "@/components/Navbar";
import {
  IconShoppingBag,
  IconUser,
  IconAward,
  IconCake,
  IconHeart,
  IconStar,
  IconChefHat,
  IconSchool,
} from "@tabler/icons-react";
import { colors, fonts } from "@/lib/theme";

export default function About() {
  return (
    <Box>
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Container size="xl" py={{ base: 40, md: 80 }}>
        <Stack align="center" gap={{ base: 30, md: 50 }}>
          <Stack align="center" gap="lg">
            <Badge
              variant="outline"
              color={colors.primary}
              size="lg"
              radius="xl"
              fw={400}
            >
              Meet Our Master Baker
            </Badge>
            <Title
              order={1}
              fz={{ base: "2rem", sm: "2.5rem", md: "3.5rem" }}
              ta="center"
              fw={300}
              style={{
                fontFamily: fonts.heading,
                lineHeight: 1.2,
                maxWidth: "800px",
              }}
            >
              Ghazal Haddad
              <Text component="span" inherit c={colors.primary} fw={400}>
                {" "}
                Artisan & Visionary
              </Text>
            </Title>
            <Text size="xl" c="dimmed" ta="center" maw={700} fw={300} lh={1.6}>
              With over two decades of passion for the craft, Ghazal has
              transformed traditional baking into an art form, creating
              unforgettable experiences one pastry at a time.
            </Text>
          </Stack>
        </Stack>
      </Container>

      {/* Main Content */}
      <Container size="xl" py={60}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={80}>
          {/* Left Column - Image and Quote */}
          <Stack gap="xl">
            <Card radius="lg" p={0} style={{ overflow: "hidden" }}>
              <Image
                src="/images/glaze2.jpg"
                alt="Ghazal Haddad"
                height={400}
                fit="cover"
              />
            </Card>
            <Card
              radius="lg"
              p="xl"
              bg="gray.0"
              style={{ border: "1px solid var(--mantine-color-gray-3)" }}
            >
              <Stack gap="md">
                <Center>
                  <IconHeart size={40} color={colors.primary} />
                </Center>
                <Text size="lg" ta="center" fs="italic" c="dimmed">
                  &ldquo;Every morning I wake up with the same excitement I had
                  on my first day. Baking isn&rsquo;t just what I do—it&rsquo;s
                  who I am. Each creation carries a piece of my heart and the
                  love for this timeless craft.&rdquo;
                </Text>
                <Text ta="center" fw={500} c={colors.primary}>
                  — Ghazal Haddad, Master Baker
                </Text>
              </Stack>
            </Card>
          </Stack>

          {/* Right Column - Story and Timeline */}
          <Stack gap="xl">
            <Stack gap="md">
              <Title
                order={2}
                size="2.5rem"
                fw={300}
                style={{ fontFamily: fonts.heading }}
              >
                The Journey
              </Title>
              <Text size="lg" c="dimmed" lh={1.7}>
                Born into a family where the aroma of fresh bread was as
                constant as the sunrise, Ghazal discovered her calling at the
                age of seven, standing on a wooden stool beside her
                grandmother&rsquo;s mixing bowl.
              </Text>
              <Text size="lg" c="dimmed" lh={1.7}>
                What began as childhood curiosity blossomed into a lifelong
                dedication to perfecting the ancient art of baking. After formal
                training at the prestigious Culinary Institute and years of
                apprenticing under renowned European master bakers, Ghazal
                founded Zallè Patisserie in 1985.
              </Text>
            </Stack>

            <Timeline
              active={4}
              bulletSize={24}
              lineWidth={2}
              color={colors.primary}
            >
              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Early Beginnings"
              >
                <Text c="dimmed" size="sm">
                  Started learning traditional baking techniques from her
                  grandmother
                </Text>
                <Text size="xs" mt={4} c="dimmed">
                  1978
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconChefHat size={12} />}
                title="Formal Training"
              >
                <Text c="dimmed" size="sm">
                  Graduated with honors from the Culinary Institute of Arts
                </Text>
                <Text size="xs" mt={4} c="dimmed">
                  1982
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconCake size={12} />}
                title="Zallè Patisserie Founded"
              >
                <Text c="dimmed" size="sm">
                  Opened the doors to her dream bakery with three signature
                  recipes
                </Text>
                <Text size="xs" mt={4} c="dimmed">
                  1985
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconAward size={12} />}
                title="International Recognition"
              >
                <Text c="dimmed" size="sm">
                  Won the Golden Whisk Award for excellence in artisan baking
                </Text>
                <Text size="xs" mt={4} c="dimmed">
                  1995
                </Text>
              </Timeline.Item>

              <Timeline.Item bullet={<IconStar size={12} />} title="Today">
                <Text c="dimmed" size="sm">
                  Leading a team of passionate bakers, serving thousands of
                  happy customers
                </Text>
                <Text size="xs" mt={4} c="dimmed">
                  2025
                </Text>
              </Timeline.Item>
            </Timeline>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Philosophy Section */}
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
                Our Philosophy
              </Title>
              <Text size="lg" c="dimmed" ta="center" maw={600}>
                At the heart of every creation lies our commitment to
                excellence, tradition, and the joy of sharing
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
              <Stack gap="md" align="center">
                <ThemeIcon
                  size={60}
                  radius="xl"
                  color={colors.primary}
                  variant="light"
                >
                  <IconHeart size={30} />
                </ThemeIcon>
                <Stack gap="xs" align="center">
                  <Title order={3} size="xl" fw={400} ta="center">
                    Passion First
                  </Title>
                  <Text c="dimmed" ta="center" size="sm" lh={1.6}>
                    Every recipe is crafted with love and dedication, ensuring
                    each bite tells a story of genuine care and artistry.
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
              <Stack gap="md" align="center">
                <ThemeIcon
                  size={60}
                  radius="xl"
                  color={colors.primary}
                  variant="light"
                >
                  <IconStar size={30} />
                </ThemeIcon>
                <Stack gap="xs" align="center">
                  <Title order={3} size="xl" fw={400} ta="center">
                    Quality Always
                  </Title>
                  <Text c="dimmed" ta="center" size="sm" lh={1.6}>
                    We source only the finest ingredients and never compromise
                    on quality, maintaining the highest standards in every
                    creation.
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
              <Stack gap="md" align="center">
                <ThemeIcon
                  size={60}
                  radius="xl"
                  color={colors.primary}
                  variant="light"
                >
                  <IconAward size={30} />
                </ThemeIcon>
                <Stack gap="xs" align="center">
                  <Title order={3} size="xl" fw={400} ta="center">
                    Tradition Honored
                  </Title>
                  <Text c="dimmed" ta="center" size="sm" lh={1.6}>
                    Rooted in time-honored techniques while embracing
                    innovation, we bridge the past and present in every
                    masterpiece.
                  </Text>
                </Stack>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

      {/* CTA Section */}
      <Container size="xl" py={60}>
        <Box
          p="xl"
          style={{
            background: colors.primary,
            borderRadius: "var(--mantine-radius-lg)",
          }}
        >
          <Stack align="center" gap="lg">
            <Title
              order={2}
              size="2rem"
              ta="center"
              c="white"
              fw={300}
              style={{ fontFamily: fonts.heading }}
            >
              Experience the Difference
            </Title>
            <Text size="lg" ta="center" c="white" maw={600} fw={300}>
              Visit us today and taste the passion, dedication, and artistry
              that goes into every single creation at Zallè Patisserie.
            </Text>
            <Group gap="lg">
              <Button
                size="lg"
                radius="xl"
                variant="white"
                color={colors.primary}
                fw={500}
                px={40}
                component="a"
                href="/shop"
              >
                Shop Our Collection
              </Button>
              <Button
                size="lg"
                radius="xl"
                variant="outline"
                color="white"
                fw={400}
                px={40}
                component="a"
                href="/contact"
              >
                Get in Touch
              </Button>
            </Group>
          </Stack>
        </Box>
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
