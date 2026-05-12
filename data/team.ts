export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Kaylen",
    role: "Owner · 3rd Generation",
    bio: "Grew up around band saws — his father, known across the Greater Houston metals industry as 'DoAll Dave,' serviced most of the saws our customers still run today. Kaylen joined the family business in 2019 and took it over in 2024. Saw Service 3G carries that work forward into the third generation.",
  },
  {
    name: "Mason",
    role: "Service Lead",
    bio: "Texas A&M graduate in Technology Management. Joined Kaylen after graduation and has been on the trucks ever since. Most memorable repair: replacing the head linear bearings and rails on a CTB400. Best friends with Kaylen for 25 years — a 2-man band that runs like a tight crew.",
  },
];

export const legacy = {
  // The story behind "3G" — three generations of the same family on the saws.
  // DoAll Dave is genuinely a name people in Greater Houston metals know.
  founderNickname: "DoAll Dave",
  founderRole: "Kaylen's father · 2nd generation",
  generationsServed: 3,
};
