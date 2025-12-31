"use client";

import {
  Container,
  Title,
  Group,
  ActionIcon,
  Flex,
  Text,
  Box,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors, fonts } from "@/lib/theme";

export function Navbar() {
  const pathname = usePathname();
  const [opened, { toggle, close }] = useDisclosure(false);

  const navItems = [
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <Box
      pos="sticky"
      top={0}
      style={{
        backgroundColor: "white",
        zIndex: 100,
        borderBottom: "1px solid #e9ecef",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container size="xl" py="md">
        <Flex justify="space-between" align="center">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Title
              order={1}
              size="1.5rem"
              fw={400}
              style={{ fontFamily: fonts.heading }}
              c={colors.primary}
            >
              Zallè Patisserie
            </Title>
          </Link>

          {/* Desktop Navigation */}
          <Group gap="xl" visibleFrom="sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <Text
                  c={pathname === item.href ? colors.primary : "dimmed"}
                  size="sm"
                  fw={pathname === item.href ? 600 : 500}
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </Group>

          {/* Mobile Burger */}
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color={colors.primary}
          />
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="xs"
        title={
          <Title
            order={2}
            size="1.25rem"
            fw={400}
            style={{ fontFamily: fonts.heading }}
            c={colors.primary}
          >
            Zallè Patisserie
          </Title>
        }
        styles={{
          body: { paddingTop: 20 },
        }}
      >
        <Stack gap="lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ textDecoration: "none" }}
              onClick={close}
            >
              <Text
                c={pathname === item.href ? colors.primary : "dimmed"}
                size="lg"
                fw={pathname === item.href ? 600 : 500}
                style={{ cursor: "pointer" }}
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
