"use client";

import {
  Container,
  Title,
  Text,
  Group,
  Stack,
  Card,
  SimpleGrid,
  Box,
  Anchor,
  Divider,
  Center,
  Image,
  ActionIcon,
  SegmentedControl,
} from "@mantine/core";
import { Navbar } from "@/components/Navbar";
import { colors, fonts } from "@/lib/theme";
import { products } from "./menu";
import { useState } from "react";
import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
import Script from "next/script";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const whatsappNumber = "+962793337446";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\s/g, "")}`;
  const instagramHandle = "zallepastry";
  const instagramLink = `https://instagram.com/${instagramHandle}`;

  // JSON-LD Schema for Menu/ItemList
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zallè Patisserie Menu",
    description:
      "Artisanal French pastries and cakes from Zallè Patisserie in Amman, Jordan",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `https://zallepastry.com${product.images[0]}`,
        url: `https://zallepastry.com/menu/${product.id}`,
        category: product.category,
        offers: {
          "@type": "Offer",
          price: product.price.toFixed(2),
          priceCurrency: "JOD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  // JSON-LD Schema for Local Business (Bakery)
  const bakerySchema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "Zallè Patisserie",
    description:
      "Artisanal French patisserie in Amman, Jordan specializing in handcrafted cakes and pastries",
    url: "https://zallepastry.com",
    telephone: "+962793337446",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amman",
      addressCountry: "JO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.9454,
      longitude: 35.9284,
    },
    priceRange: "$$",
    servesCuisine: ["French", "Pastries", "Cakes"],
    sameAs: [`https://instagram.com/${instagramHandle}`],
    hasMenu: {
      "@type": "Menu",
      url: "https://zallepastry.com/menu",
    },
  };

  return (
    <Box>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="menu-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <Script
        id="bakery-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakerySchema) }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Page Header */}
      <Box
        py={{ base: 50, sm: 60, md: 80 }}
        style={{
          backgroundImage: "url('/marbleback.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container size="xl">
          <Stack align="center" gap="lg">
            <Title
              order={1}
              fz={{ base: "2rem", sm: "2.5rem", md: "3rem" }}
              ta="center"
              fw={300}
              style={{ fontFamily: fonts.heading, color: "#1a1a1a" }}
            >
              Our Collection
            </Title>
            <Text size="lg" ta="center" maw={500} fw={400} lh={1.6} c="dark.6">
              Handcrafted pastries made with love in Amman. Order through
              WhatsApp or Instagram.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Category Filter */}
      <Container size="xl" py={{ base: 30, md: 40 }}>
        <Center>
          <SegmentedControl
            value={activeCategory}
            onChange={setActiveCategory}
            data={categories}
            radius="xl"
            size="md"
            styles={{
              root: {
                backgroundColor: "#f1f3f5",
              },
              indicator: {
                backgroundColor: colors.primary,
              },
              label: {
                fontWeight: 500,
              },
            }}
          />
        </Center>
      </Container>

      {/* Products Grid */}
      <Container size="xl" pb={{ base: 60, md: 80 }}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: "lg", md: "xl" }}
        >
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              radius="lg"
              p={0}
              bg="white"
              component="a"
              href={`/menu/${product.id}`}
              style={{
                border: "1px solid #e9ecef",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Stack gap={0}>
                <Box style={{ position: "relative" }}>
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    height={220}
                    fit="cover"
                    radius={0}
                  />
                  <Box
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      backgroundColor: colors.primary,
                      padding: "6px 12px",
                      borderRadius: 20,
                    }}
                  >
                    <Text size="sm" fw={600} c="dark.8">
                      JOD {product.price.toFixed(2)}
                    </Text>
                  </Box>
                </Box>

                <Stack gap="sm" p="lg">
                  <Text size="xs" fw={500} c="dimmed" tt="uppercase" lts={0.5}>
                    {product.category}
                  </Text>
                  <Title order={3} size="lg" fw={500} c="dark.8">
                    {product.name}
                  </Title>
                  <Text c="dimmed" size="sm" lh={1.6}>
                    {product.description}
                  </Text>
                </Stack>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Order CTA Section */}
      <Box py={{ base: 50, md: 70 }} bg="gray.0">
        <Container size="sm">
          <Stack align="center" gap="lg">
            <Title
              order={2}
              fz={{ base: "1.5rem", sm: "1.75rem" }}
              fw={300}
              ta="center"
              style={{ fontFamily: fonts.heading }}
            >
              Ready to Order?
            </Title>
            <Text size="md" c="dimmed" ta="center" maw={400} lh={1.6}>
              Message us on WhatsApp or Instagram to place your order. Custom
              orders welcome!
            </Text>
            <Group gap="md">
              <ActionIcon
                component="a"
                href={instagramLink}
                target="_blank"
                size={50}
                radius="xl"
                variant="filled"
                bg={colors.primary}
                c="dark.8"
              >
                <IconBrandInstagram size={26} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href={whatsappLink}
                target="_blank"
                size={50}
                radius="xl"
                variant="filled"
                bg={colors.primary}
                c="dark.8"
              >
                <IconBrandWhatsapp size={26} />
              </ActionIcon>
            </Group>
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
