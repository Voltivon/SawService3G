import {
  Anchor,
  Truck,
  Wrench,
  ShieldCheck,
  Factory,
  Scissors,
  Siren,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  Icon: typeof Anchor;
  span?: "wide" | "tall" | "default";
};

export const services: Service[] = [
  {
    slug: "anchor",
    title: "Anchor",
    blurb:
      "Set, level, and anchor band saws to spec. Concrete prep, leveling, alignment, and power-up so the machine runs true and stays true.",
    Icon: Anchor,
    span: "wide",
  },
  {
    slug: "relocate",
    title: "Disassemble & Relocate",
    blurb:
      "Tear-down, transport, and re-anchor across plants or sites. Documented for warranty, calibrated on the other end.",
    Icon: Truck,
  },
  {
    slug: "repair",
    title: "Mechanical, Hydraulic & Electrical Repair",
    blurb:
      "Drive systems, blade tracking, hydraulics, controls, sensors. We diagnose on-site and get the saw cutting again.",
    Icon: Wrench,
    span: "tall",
  },
  {
    slug: "preventive-maintenance",
    title: "Preventive Maintenance Programs",
    blurb:
      "Scheduled inspections that catch wear before it becomes downtime. Tracked, reported, and tailored to your duty cycle.",
    Icon: ShieldCheck,
  },
  {
    slug: "metal-fab",
    title: "Metal Fabrication Saw Service",
    blurb:
      "Service tuned to fab-shop realities: long runs, mixed alloys, structural stock. Keep your throughput predictable.",
    Icon: Factory,
  },
  {
    slug: "cutting",
    title: "Cutting Saw Service",
    blurb:
      "All-around cutting saw maintenance and repair across brands, drives, and blade types.",
    Icon: Scissors,
  },
  {
    slug: "emergency",
    title: "Emergency / Urgent Response",
    blurb:
      "Saw down? We come early, stay late. Fast on-site response across Greater Houston and surrounding states.",
    Icon: Siren,
    span: "wide",
  },
];
