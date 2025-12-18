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
  Avatar,
  Divider,
  Progress,
  ThemeIcon,
  Flex,
  ActionIcon,
  Timeline,
  Switch,
  Tabs,
} from "@mantine/core";
import { Navbar } from "@/components/Navbar";
import {
  IconUser,
  IconStar,
  IconGift,
  IconCrown,
  IconShoppingBag,
  IconEdit,
  IconSettings,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { colors, gradients, fonts } from "@/lib/theme";

interface StampCard {
  currentStamps: number;
  requiredStamps: number;
  rewardTitle: string;
  level: number;
}

interface UserProfile {
  name: string;
  email: string;
  memberSince: string;
  totalOrders: number;
  totalSpent: number;
  favoriteItems: string[];
  preferences: {
    notifications: boolean;
    newsletter: boolean;
    specialOffers: boolean;
  };
}

export default function Profile() {
  const [stampCard, setStampCard] = useState<StampCard>({
    currentStamps: 0,
    requiredStamps: 10,
    rewardTitle: "Free Croissant",
    level: 1,
  });

  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    memberSince: "January 2024",
    totalOrders: 23,
    totalSpent: 287.5,
    favoriteItems: ["Chocolate Croissant", "Cappuccino", "Blueberry Muffin"],
    preferences: {
      notifications: true,
      newsletter: true,
      specialOffers: false,
    },
  });

  const [activeTab, setActiveTab] = useState<string | null>("loyalty");

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedStampCard = localStorage.getItem("loyaltyStampCard");
    const savedUserProfile = localStorage.getItem("userProfile");

    if (savedStampCard) {
      try {
        setStampCard(JSON.parse(savedStampCard));
      } catch (error) {
        console.error("Failed to parse stamp card data:", error);
      }
    }

    if (savedUserProfile) {
      try {
        setUserProfile(JSON.parse(savedUserProfile));
      } catch (error) {
        console.error("Failed to parse user profile data:", error);
      }
    }
  }, []);

  // Save stamp card to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("loyaltyStampCard", JSON.stringify(stampCard));
  }, [stampCard]);

  // Save user profile to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
  }, [userProfile]);

  const recentOrders = [
    {
      date: "2025-09-25",
      items: ["Chocolate Croissant", "Cappuccino"],
      total: 12.5,
      stamps: 1,
    },
    {
      date: "2025-09-20",
      items: ["Blueberry Muffin", "Latte", "Croissant"],
      total: 18.25,
      stamps: 2,
    },
    {
      date: "2025-09-15",
      items: ["Sourdough Bread", "Espresso"],
      total: 15.0,
      stamps: 1,
    },
  ];

  const addStamp = () => {
    setStampCard((prev) => {
      const newStamps = Math.min(prev.currentStamps + 1, prev.requiredStamps);
      if (newStamps === prev.requiredStamps) {
        // Reward claimed, reset for next level
        setTimeout(() => {
          setStampCard((current) => ({
            ...current,
            currentStamps: 0,
            level: current.level + 1,
            rewardTitle:
              current.level === 1
                ? "Free Coffee"
                : current.level === 2
                ? "Free Pastry Box"
                : "VIP Discount",
          }));
        }, 2000);
      }
      return { ...prev, currentStamps: newStamps };
    });
  };

  const getStampProgress = () =>
    (stampCard.currentStamps / stampCard.requiredStamps) * 100;

  const renderStamp = (index: number) => {
    const isEarned = index < stampCard.currentStamps;
    return (
      <ThemeIcon
        key={index}
        size={50}
        radius="xl"
        variant={isEarned ? "gradient" : "light"}
        gradient={isEarned ? gradients.primary : undefined}
        color={isEarned ? undefined : "gray"}
        style={{
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: isEarned ? "scale(1.1)" : "scale(1)",
          boxShadow: isEarned
            ? `0 4px 16px ${colors.primary}40, 0 2px 8px ${colors.primary}20`
            : "0 2px 8px rgba(0,0,0,0.1)",
          border: isEarned
            ? `2px solid ${colors.primary}50`
            : "2px solid #e9ecef",
          background: isEarned
            ? gradients.primaryCSS
            : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        }}
        onClick={addStamp}
      >
        <IconStar
          size={24}
          style={{
            filter: isEarned
              ? "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
              : "none",
            color: isEarned ? "white" : "#adb5bd",
          }}
        />
      </ThemeIcon>
    );
  };

  return (
    <Box>
      <Navbar />

      <Container size="xl" py={60}>
        <Stack gap="xl">
          {/* Profile Header */}
          <Card shadow="sm" p="xl" radius="lg">
            <Flex align="center" gap="xl">
              <Avatar
                size={100}
                radius="xl"
                variant="gradient"
                gradient={gradients.primary}
              >
                <IconUser size={40} />
              </Avatar>
              <Stack gap="sm" flex={1}>
                <Group justify="space-between">
                  <Title order={2} style={{ fontFamily: fonts.heading }}>
                    Welcome back, {userProfile.name}
                  </Title>
                  <ActionIcon variant="light" color={colors.primary} size="lg">
                    <IconEdit size={20} />
                  </ActionIcon>
                </Group>
                <Text c="dimmed">{userProfile.email}</Text>
                <Group gap="lg">
                  <Text size="sm" c="dimmed">
                    Member since {userProfile.memberSince}
                  </Text>
                  <Badge variant="light" color={colors.primary}>
                    Level {stampCard.level} Member
                  </Badge>
                </Group>
                <Group gap="xl" mt="sm">
                  <Stack gap={2} align="center">
                    <Text size="xl" fw={600} c={colors.primary}>
                      {userProfile.totalOrders}
                    </Text>
                    <Text size="xs" c="dimmed">
                      Total Orders
                    </Text>
                  </Stack>
                  <Stack gap={2} align="center">
                    <Text size="xl" fw={600} c={colors.primary}>
                      ${userProfile.totalSpent.toFixed(2)}
                    </Text>
                    <Text size="xs" c="dimmed">
                      Total Spent
                    </Text>
                  </Stack>
                  <Stack gap={2} align="center">
                    <Text size="xl" fw={600} c={colors.primary}>
                      {stampCard.currentStamps}
                    </Text>
                    <Text size="xs" c="dimmed">
                      Current Stamps
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Flex>
          </Card>

          {/* Tabs Section */}
          <Tabs
            value={activeTab}
            onChange={setActiveTab}
            color={colors.primary}
          >
            <Tabs.List>
              <Tabs.Tab value="loyalty" leftSection={<IconStar size={16} />}>
                Loyalty Card
              </Tabs.Tab>
              <Tabs.Tab
                value="orders"
                leftSection={<IconShoppingBag size={16} />}
              >
                Order History
              </Tabs.Tab>
              <Tabs.Tab
                value="settings"
                leftSection={<IconSettings size={16} />}
              >
                Settings
              </Tabs.Tab>
            </Tabs.List>

            {/* Loyalty Card Tab */}
            <Tabs.Panel value="loyalty" pt="xl">
              <Card
                shadow="sm"
                p="xl"
                radius="lg"
                style={{
                  backgroundImage: "url(/marbleBack.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: `2px solid ${colors.primary}20`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Purple accent overlay */}
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                      radial-gradient(ellipse at 30% 30%, rgba(178, 139, 194, 0.15) 0%, transparent 40%),
                      radial-gradient(ellipse at 70% 70%, rgba(223, 197, 254, 0.2) 0%, transparent 40%),
                      radial-gradient(ellipse at 10% 80%, rgba(178, 139, 194, 0.1) 0%, transparent 30%),
                      radial-gradient(ellipse at 90% 20%, rgba(223, 197, 254, 0.18) 0%, transparent 35%)
                    `,
                    opacity: 0.7,
                    zIndex: 0,
                  }}
                />

                <Stack
                  align="center"
                  gap="xl"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <Group align="center" gap="lg">
                    <ThemeIcon
                      size={48}
                      radius="xl"
                      variant="gradient"
                      gradient={gradients.primary}
                      style={{
                        boxShadow: `0 4px 20px ${colors.primary}30`,
                      }}
                    >
                      <IconCrown size={28} color="white" />
                    </ThemeIcon>
                    <Title
                      order={2}
                      c={colors.primary}
                      style={{
                        fontFamily: fonts.heading,
                        textShadow: "0 2px 4px rgba(255,255,255,0.8)",
                        fontSize: "2rem",
                        fontWeight: 300,
                      }}
                    >
                      Loyalty Stamp Card
                    </Title>
                  </Group>

                  <Stack align="center" gap="md">
                    <Text
                      size="lg"
                      c={colors.primary}
                      ta="center"
                      style={{
                        textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                        fontWeight: 500,
                      }}
                    >
                      Collect {stampCard.requiredStamps} stamps to earn your{" "}
                      <Text
                        component="span"
                        fw={600}
                        style={{ color: colors.primary }}
                      >
                        {stampCard.rewardTitle}
                      </Text>
                    </Text>

                    <Progress
                      value={getStampProgress()}
                      size="xl"
                      radius="xl"
                      w={300}
                      color={colors.primary}
                      bg="rgba(255, 255, 255, 0.3)"
                      style={{
                        boxShadow: `0 2px 8px ${colors.primary}20`,
                      }}
                    />

                    <Text
                      c={colors.primary}
                      size="sm"
                      style={{
                        opacity: 0.9,
                        fontWeight: 500,
                        textShadow: "0 1px 2px rgba(255,255,255,0.6)",
                      }}
                    >
                      {stampCard.currentStamps} of {stampCard.requiredStamps}{" "}
                      stamps earned
                    </Text>
                  </Stack>

                  {/* Stamp Grid */}
                  <SimpleGrid cols={5} spacing="lg">
                    {Array.from(
                      { length: stampCard.requiredStamps },
                      (_, index) => renderStamp(index)
                    )}
                  </SimpleGrid>

                  {stampCard.currentStamps === stampCard.requiredStamps ? (
                    <Card
                      shadow="xl"
                      p="xl"
                      radius="lg"
                      w="100%"
                      maw={400}
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        border: `2px solid ${colors.primary}30`,
                        boxShadow: `0 8px 32px ${colors.primary}20`,
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Stack align="center" gap="md">
                        <ThemeIcon
                          size={60}
                          radius="xl"
                          variant="light"
                          color="green"
                        >
                          <IconGift size={30} />
                        </ThemeIcon>
                        <Title order={3} ta="center" c="green">
                          Congratulations! 🎉
                        </Title>
                        <Text ta="center">
                          You've earned a {stampCard.rewardTitle}! Show this
                          screen to redeem your reward.
                        </Text>
                        <Button
                          variant="filled"
                          color="green"
                          size="lg"
                          leftSection={<IconGift size={20} />}
                          onClick={addStamp}
                        >
                          Redeem Reward
                        </Button>
                      </Stack>
                    </Card>
                  ) : (
                    <Button
                      variant="gradient"
                      gradient={gradients.primary}
                      c="white"
                      size="lg"
                      leftSection={<IconStar size={20} />}
                      onClick={addStamp}
                      style={{
                        boxShadow: `0 4px 20px ${colors.primary}30`,
                      }}
                    >
                      Simulate Purchase (+1 Stamp)
                    </Button>
                  )}
                </Stack>
              </Card>
            </Tabs.Panel>

            {/* Order History Tab */}
            <Tabs.Panel value="orders" pt="xl">
              <Card shadow="sm" p="xl" radius="lg">
                <Title order={3} mb="lg" style={{ fontFamily: fonts.heading }}>
                  Recent Orders
                </Title>
                <Timeline
                  active={-1}
                  bulletSize={24}
                  lineWidth={2}
                  color={colors.primary}
                >
                  {recentOrders.map((order, index) => (
                    <Timeline.Item
                      key={index}
                      bullet={<IconShoppingBag size={12} />}
                      title={`Order from ${new Date(
                        order.date
                      ).toLocaleDateString()}`}
                    >
                      <Text size="sm" c="dimmed" mt={4}>
                        {order.items.join(", ")}
                      </Text>
                      <Group gap="lg" mt={8}>
                        <Text size="sm" fw={500}>
                          Total: ${order.total.toFixed(2)}
                        </Text>
                        <Badge size="sm" variant="light" color={colors.primary}>
                          +{order.stamps} stamps
                        </Badge>
                      </Group>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </Tabs.Panel>

            {/* Settings Tab */}
            <Tabs.Panel value="settings" pt="xl">
              <SimpleGrid cols={1} spacing="lg">
                <Card shadow="sm" p="xl" radius="lg">
                  <Title
                    order={3}
                    mb="lg"
                    style={{ fontFamily: fonts.heading }}
                  >
                    Preferences
                  </Title>
                  <Stack gap="lg">
                    <Group justify="space-between">
                      <div>
                        <Text fw={500}>Push Notifications</Text>
                        <Text size="sm" c="dimmed">
                          Receive order updates and special offers
                        </Text>
                      </div>
                      <Switch
                        checked={userProfile.preferences.notifications}
                        onChange={(event) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            preferences: {
                              ...prev.preferences,
                              notifications: event.currentTarget.checked,
                            },
                          }))
                        }
                        color={colors.primary}
                      />
                    </Group>

                    <Divider />

                    <Group justify="space-between">
                      <div>
                        <Text fw={500}>Newsletter</Text>
                        <Text size="sm" c="dimmed">
                          Weekly updates about new products
                        </Text>
                      </div>
                      <Switch
                        checked={userProfile.preferences.newsletter}
                        onChange={(event) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            preferences: {
                              ...prev.preferences,
                              newsletter: event.currentTarget.checked,
                            },
                          }))
                        }
                        color={colors.primary}
                      />
                    </Group>

                    <Divider />

                    <Group justify="space-between">
                      <div>
                        <Text fw={500}>Special Offers</Text>
                        <Text size="sm" c="dimmed">
                          Exclusive deals and promotions
                        </Text>
                      </div>
                      <Switch
                        checked={userProfile.preferences.specialOffers}
                        onChange={(event) =>
                          setUserProfile((prev) => ({
                            ...prev,
                            preferences: {
                              ...prev.preferences,
                              specialOffers: event.currentTarget.checked,
                            },
                          }))
                        }
                        color={colors.primary}
                      />
                    </Group>
                  </Stack>
                </Card>

                <Card shadow="sm" p="xl" radius="lg">
                  <Title
                    order={3}
                    mb="lg"
                    style={{ fontFamily: fonts.heading }}
                  >
                    Favorite Items
                  </Title>
                  <Group gap="sm">
                    {userProfile.favoriteItems.map((item) => (
                      <Badge
                        key={item}
                        variant="light"
                        color={colors.primary}
                        size="lg"
                      >
                        {item}
                      </Badge>
                    ))}
                  </Group>
                </Card>
              </SimpleGrid>
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Container>
    </Box>
  );
}
