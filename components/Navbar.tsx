"use client";

import {
  Container,
  Title,
  Group,
  ActionIcon,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconShoppingBag, IconUser } from "@tabler/icons-react";
import { colors, fonts } from "@/lib/theme";

export function Navbar() {
  const pathname = usePathname();

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
              size="2rem"
              fw={400}
              style={{ fontFamily: fonts.heading }}
              c={colors.primary}
            >
              Zallè Patisserie
            </Title>
          </Link>
          <Group gap="xl">
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
            <Group gap="sm">
              <ActionIcon variant="subtle" color="gray" size="lg">
                <IconShoppingBag size={20} />
              </ActionIcon>
              <Link href="/profile" style={{ textDecoration: "none" }}>
                <ActionIcon
                  variant="subtle"
                  color={pathname === "/profile" ? colors.primary : "gray"}
                  size="lg"
                >
                  <IconUser size={20} />
                </ActionIcon>
              </Link>
            </Group>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}
