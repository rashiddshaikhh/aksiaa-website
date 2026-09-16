export type Logo = { name: string; file: string };
export type Group = {
  title: string;
  subtitle: string;
  reverse?: boolean;
  duration: number;
  rows?: number;
  logos: Logo[];
};

export const PARTNER_GROUPS: Group[] = [
  {
    title: "Cloud Agnostic Approach",
    subtitle: "Run and manage workloads on the platform that fits, without lock-in",
    duration: 22,
    logos: [
      { name: "Acronis", file: "acronis.png" },

    ],
  },
  {
    title: "Networking & Security Product Partners",
    subtitle: "Best-of-breed vendors across network, endpoint, identity and data security",
    reverse: true,
    duration: 35,
    rows: 3,
    logos: [
      { name: "Juniper Networks", file: "juniper.png" },
      { name: "Cisco", file: "cisco.png" },
      { name: "CrowdStrike", file: "crowdstrike.png" },
      { name: "Aruba", file: "aruba.png" },
      { name: "Palo Alto Networks", file: "paloalto.png" },
      { name: "SentinelOne", file: "sentinelone.png" },
      { name: "Sophos", file: "sophos.png" },
      { name: "Symantec", file: "symantec.png" },
      { name: "Versa Networks", file: "versa.png" },
      { name: "Menlo Security", file: "menlo-security.png" },
      { name: "FireMon", file: "firemon.png" },
      { name: "Infoblox", file: "infoblox.png" },
      { name: "BigID", file: "bigid.png" },
      { name: "sendQuick", file: "sendquick.png" },
      { name: "Mimecast", file: "mimecast.png" },
      { name: "Citrix", file: "citrix.png" },
      { name: "Nutanix", file: "nutanix.png" },
      { name: "SolarWinds", file: "solarwinds.png" },
      { name: "Fortinet", file: "fortinet.png" },
      { name: "WanPulse", file: "wanpulse.png" },
      { name: "Riverbed", file: "riverbed.png" },
    ],
  },
];
