"use client";

import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="subtle"
      color="gray"
      leftSection={<IconArrowLeft size={18} />}
      onClick={() => router.back()}
      style={{ fontWeight: 400 }}
    >
      Back to Menu
    </Button>
  );
}
