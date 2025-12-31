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
  TextInput,
  Textarea,
  Select,
  ThemeIcon,
} from "@mantine/core";
import { Navbar } from "@/components/Navbar";
import {
  IconShoppingBag,
  IconUser,
  IconPhone,
  IconBrandInstagram,
  IconMapPin,
  IconClock,
  IconSend,
} from "@tabler/icons-react";
import { useState } from "react";
import { colors, fonts } from "@/lib/theme";

export default function Contact() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to your backend or email service
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
            Let's Connect
          </Badge>
          <Title
            order={1}
            fz={{ base: "2rem", sm: "2.5rem", md: "3rem" }}
            ta="center"
            fw={300}
            style={{ fontFamily: fonts.heading }}
          >
            Get in Touch
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={600} fw={300} lh={1.6}>
            Whether you're planning a special event, looking for wholesale
            opportunities, or simply want to say hello, we'd love to hear from
            you.
          </Text>
        </Stack>
      </Container>

      {/* Main Content */}
      <Container size="xl" py={40}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={60}>
          {/* Contact Information */}
          <Stack gap="xl">
            <Stack gap="md">
              <Title
                order={2}
                size="2rem"
                fw={300}
                style={{ fontFamily: fonts.heading }}
              >
                Contact Us
              </Title>
            </Stack>

            <Stack gap="lg">
              <Card
                radius="lg"
                p="lg"
                bg="gray.0"
                style={{ border: "1px solid var(--mantine-color-gray-3)" }}
              >
                <Group gap="md">
                  <ThemeIcon
                    size={50}
                    radius="xl"
                    color={colors.primary}
                    variant="light"
                  >
                    <IconPhone size={24} />
                  </ThemeIcon>
                  <div>
                    <Text fw={500} size="lg">
                      Phone
                    </Text>
                    <Text c="dimmed">+962 79 333 7446</Text>
                    <Text c="dimmed" size="sm">
                      Call us for orders & inquiries
                    </Text>
                  </div>
                </Group>
              </Card>

              <Card
                radius="lg"
                p="lg"
                bg="gray.0"
                style={{ border: "1px solid var(--mantine-color-gray-3)" }}
              >
                <Group gap="md">
                  <ThemeIcon
                    size={50}
                    radius="xl"
                    color={colors.primary}
                    variant="light"
                  >
                    <IconBrandInstagram size={24} />
                  </ThemeIcon>
                  <div>
                    <Text fw={500} size="lg">
                      Instagram
                    </Text>
                    <Anchor
                      href="https://instagram.com/zallepastry"
                      target="_blank"
                      c="dimmed"
                    >
                      @zallepastry
                    </Anchor>
                    <Text c="dimmed" size="sm">
                      Follow us for updates & inspiration
                    </Text>
                  </div>
                </Group>
              </Card>

              <Card
                radius="lg"
                p="lg"
                bg="gray.0"
                style={{ border: "1px solid var(--mantine-color-gray-3)" }}
              >
                <Group gap="md">
                  <ThemeIcon
                    size={50}
                    radius="xl"
                    color={colors.primary}
                    variant="light"
                  >
                    <IconClock size={24} />
                  </ThemeIcon>
                  <div>
                    <Text fw={500} size="lg">
                      Hours
                    </Text>
                    <Text c="dimmed">Monday - Saturday: 7:00 AM - 8:00 PM</Text>
                    <Text c="dimmed">Sunday: 8:00 AM - 6:00 PM</Text>
                  </div>
                </Group>
              </Card>
            </Stack>
          </Stack>

          {/* Contact Form */}
          <Stack gap="xl">
            <Stack gap="md">
              <Title
                order={2}
                size="2rem"
                fw={300}
                style={{ fontFamily: fonts.heading }}
              >
                Business Inquiries
              </Title>
              <Text size="lg" c="dimmed" lh={1.7}>
                Interested in larger orders or custom items? Fill out the form
                below and we'll get back to you.
              </Text>
            </Stack>

            <Card
              radius="lg"
              p="xl"
              bg="gray.0"
              style={{ border: "1px solid var(--mantine-color-gray-3)" }}
            >
              <form onSubmit={handleSubmit}>
                <Stack gap="md">
                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    <TextInput
                      label="Business Name"
                      placeholder="Your company name"
                      required
                      value={formData.businessName}
                      onChange={(e) =>
                        handleInputChange("businessName", e.target.value)
                      }
                      styles={{
                        label: { fontWeight: 500 },
                        input: {
                          border: "1px solid var(--mantine-color-gray-4)",
                          "&:focus": { borderColor: colors.primary },
                        },
                      }}
                    />
                    <TextInput
                      label="Contact Person"
                      placeholder="Your full name"
                      required
                      value={formData.contactPerson}
                      onChange={(e) =>
                        handleInputChange("contactPerson", e.target.value)
                      }
                      styles={{
                        label: { fontWeight: 500 },
                        input: {
                          border: "1px solid var(--mantine-color-gray-4)",
                          "&:focus": { borderColor: colors.primary },
                        },
                      }}
                    />
                  </SimpleGrid>

                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    <TextInput
                      label="Email Address"
                      placeholder="your.email@company.com"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      styles={{
                        label: { fontWeight: 500 },
                        input: {
                          border: "1px solid var(--mantine-color-gray-4)",
                          "&:focus": { borderColor: colors.primary },
                        },
                      }}
                    />
                    <TextInput
                      label="Phone Number"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      styles={{
                        label: { fontWeight: 500 },
                        input: {
                          border: "1px solid var(--mantine-color-gray-4)",
                          "&:focus": { borderColor: colors.primary },
                        },
                      }}
                    />
                  </SimpleGrid>

                  <Select
                    label="Inquiry Type"
                    placeholder="Select your inquiry type"
                    required
                    value={formData.inquiryType}
                    onChange={(value) =>
                      handleInputChange("inquiryType", value || "")
                    }
                    data={[
                      { value: "wholesale", label: "Wholesale Orders" },
                      { value: "catering", label: "Catering Services" },
                      { value: "events", label: "Special Events" },
                      { value: "partnership", label: "Business Partnership" },
                      { value: "custom", label: "Custom Orders" },
                      { value: "other", label: "Other" },
                    ]}
                    styles={{
                      label: { fontWeight: 500 },
                      input: {
                        border: "1px solid var(--mantine-color-gray-4)",
                        "&:focus": { borderColor: colors.primary },
                      },
                    }}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Tell us about your requirements, event details, or any questions you have..."
                    required
                    minRows={4}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    styles={{
                      label: { fontWeight: 500 },
                      input: {
                        border: "1px solid var(--mantine-color-gray-4)",
                        "&:focus": { borderColor: colors.primary },
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    radius="xl"
                    variant="filled"
                    color={colors.primary}
                    c="dark"
                    fw={500}
                    leftSection={<IconSend size={20} />}
                    fullWidth
                  >
                    Send Inquiry
                  </Button>
                </Stack>
              </form>
            </Card>
          </Stack>
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
