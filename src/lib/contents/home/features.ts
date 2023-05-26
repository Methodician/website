import type { Feature, verticalFeature } from "$lib/types/feature";
import { terminalSource, linuxSource } from "../terminal";
// @ts-ignore
import Workspaces from "$lib/components/workspaces.svelte";
import type { Card } from "$lib/types/card";

export const multiTrackDevelopmentFeature: Feature = {
  title: "Multi track development with ease",
  paragraph:
    "You can have multiple workspaces with different contexts open at once - one for your feature, one for a bug or one for your code review directly in Gitpod.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

export const reduceDeveloperToil: Feature = {
  title: "Collaborate with anyone",
  paragraph:
    "From QA to PMs to designers, anyone can preview, open or share a dev environment. Jump in with your immediate team or cross-functional stakeholders to preview changes live and shorten feedback cycles.",
  lottie: {
    src: "/lottie/share_workspace.json",
    id: "share-workspace",
  },
};

export const worksOnAnyMachineFeature: Feature = {
  title: `Works on <t style="text-decoration-line: line-through; color: #999795;">my</t> any machine`,
  paragraph:
    "No more compatibility issues. Developers can work with the same tools, libraries, and dependencies, regardless of operating system, with a single click.",
  previewComponent: Workspaces,
  moreButton: {
    text: "Improve collaboration",
    href: "/solutions/collaboration",
  },
};

export const collaborationFeature: Feature = {
  title: "Collaborate with ease",
  paragraph:
    "Engineers, designers, product managers. With Gitpod, anyone on the team can run code with ease. Yes, your CTO as well 🫶</br></br>Share running workspaces for pair programming, use port forwarding or share a snapshot of your CDE.",
  // image: {
  //   src: "/images/features/collaboration.png",
  //   alt: "Collaboration",
  //   classNames: "shadow-medium",
  //   styles: "border-radius: 7px",
  // },
  lottie: {
    src: "/lottie/share_workspace.json",
    id: "share-workspace",
  },
};

export const secureYourSoftwareSupplyChainFeature: Feature = {
  title: "Secure your software supply chain",
  paragraph:
    "<a href='/cde'>CDEs</a> are ephemeral, short-lived, and isolated from other work. With Gitpod, there’s no need to download any code to your machine. </br></br>Gitpod builds artefacts from a central place enabling you to fix vulnerabilities instantly across your team.",
  previewComponent: Workspaces,
};

export const codeAnywhereFeature: Feature = {
  title: "Code anywhere, on any device",
  paragraph:
    "You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a browser. ",
  image: {
    src: "/images/features/ipad.webp",
    alt: "Gitpod Workspace on an iPad.",
    width: "100%",
    height: "100%",
  },
};

export const onboardNewHires: Feature = {
  title: "Start developing instantly",
  paragraph:
    "Reduce time to first PR, drastically. With pre-configured environments, eliminate the need to setup any dev environments: local, VDI or homegrown.",
  terminal: {
    source: linuxSource,
    dark: true,
    shadow: false,
    narrow: true,
    skipToEnd: true,
  },
};

export const reduceTimeToResolution: Feature = {
  title: "Reduce time to resolution",
  paragraph:
    "Pre-configured workspaces mean less support tickets and faster debugging time.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

export const otherFeatures: Feature[] = [
  reduceDeveloperToil,
  // {
  //   title: "Bringing dev closer to prod",
  //   paragraph:
  //     "Gitpod provisions powerful Linux containers under the hood. A Linux shell with root/sudo, a file system, Docker and all other tools and binaries that run on Linux. One OS for both dev and prod.",
  //   moreButton: {
  //     href: "https://gitpod.io/workspaces/",
  //     text: "Start for free",
  //   },
  //   terminal: {
  //     source: linuxSource,
  //     dark: true,
  //     shadow: false,
  //     narrow: true,
  //     skipToEnd: true,
  //   },
  // },

  // moreButton: {
  //   href: "/docs/configure/workspaces/collaboration",
  //   text: "More on collaboration",
  // },
  // },
  {
    title: "Data center performance, less overhead",
    paragraph:
      "Pre-built environments speed up development by building branches in the background, without killing your laptop battery.",
    terminal: {
      source: terminalSource,
    },
  },
];

export const carbonNeutralFeature: verticalFeature = {
  title: "Code in a carbon-neutral workspace",
  paragraph:
    "Not only is Gitpod more resource-efficient but it also runs on 100% carbon-neutral cloud servers (GCP). All the power, with a lower cost to our planet.",
  moreButton: {
    href: "https://cloud.google.com/sustainability",
    text: "More on GCP carbon neutral",
    type: "secondary",
  },
};

export const secondaryFeatures: Card[] = [
  {
    icon: {
      src: "/svg/icons/up-arrow.svg",
    },
    title: "Onboard faster",
    text: "Get new hires or contractors to commit their first PR on day 1 without shipping a company laptop.</br></br>Gitpod reduces complexity by providing a plug & play experience for software development.",
  },
  {
    icon: {
      src: "/svg/icons/gear-play.svg",
    },
    title: "Remove friction",
    text: "Give your developers full control over what device they use, wherever they are in the world.</br></br>Gitpod creates an identical developer experience for everyone, on every machine.",
  },
  {
    icon: {
      src: "/svg/icons/secure.svg",
    },
    title: "Increase security",
    text: "Remove your team’s local machines as an attack vector in your software supply chain.</br></br>Gitpod helps you retain control over your resources and protect your company source code from malicious attacks.",
  },
  {
    icon: {
      src: "/svg/icons/team.svg",
    },
    title: "Collaborate easily",
    text: "Enable faster collaboration across all team members, in realtime.</br></br>With Gitpod, teams can work on several workspaces in parallel and share them in seconds.",
  },
];

/**Dedicated Features
 * Using on /self-hosted page
 *
 */

export const maximizeControl: Feature = {
  title: "Full speed and flexibility",
  paragraph:
    "The maintenance and operation of your single-tenant instance are fully managed by us.</br></br>Your team always works with the latest version of Gitpod.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

export const devsDontCareAboutMachines: Feature = {
  title: "Maximize compliance and control",
  paragraph:
    "Meet complex compliance and deployment needs with an installation of Gitpod in your region of choice.</br></br>Increase data protection and isolation with private connections.",
  previewComponent: Workspaces,
};

export const dedicatedFeatures: Feature[] = [
  maximizeControl,
  devsDontCareAboutMachines,
];

/**Collaboration Features,
 * Using on /solutions/collaboration page
 *
 */

export const parallelDevelopment: Feature = {
  title: "A new workspace with a single click",
  paragraph:
    "Multiple ephemeral workspaces. Enable anyone on your team to work on fixing bugs, implementing features, reviewing pull request, all at the same time.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

export const teamsCodeTogether: Feature = {
  title: "Share workspaces in realtime",
  paragraph:
    "Collaborate on tasks without making changes to your dev environment. Share running workspaces for pair programming, use port forwarding or share a snapshot as a copy of your workspace with teammates.",
  lottie: {
    src: "/lottie/share_workspace.json",
    id: "share-workspace",
  },
};

export const worksOnAnyMachineFeatureForCollaboration: Feature = {
  title: `Works on <t style="text-decoration-line: line-through; color: #999795;">my</t> any machine`,
  paragraph: `No more "works on my machine" issues.</br></br> Gitpod creates an identical developer experience for everyone, on every machine.`,
  image: {
    src: "/images/features/works-on-any-machine.webp",
    alt: "Works on any machine",
    width: "100%",
    height: "100%",
  },
};

export const collaborationFeatures: Feature[] = [
  parallelDevelopment,
  teamsCodeTogether,
  worksOnAnyMachineFeatureForCollaboration,
];

/**Onboarding Features,
 * Using on /solutions/onboarding page
 *
 */

export const onboardDevsWithOneClick: Feature = {
  title: "Onboard developers with one click",
  paragraph:
    "With a single click, developers can spin up perfectly configured environments and start coding immediately.",
  lottie: {
    src: "/lottie/edit_workspace.json",
    id: "edit_workspace",
  },
};

export const debugFasterThenEver: Feature = {
  title: "Reproducible and controllable environments",
  paragraph:
    "CDEs enable developers to work with the same tools, libraries, and dependencies, regardless of operating system, device or IDE they use.",
  terminal: {
    source: terminalSource,
  },
};

export const oneCofigToRuleThemAll: Feature = {
  title: "One config to rule them all",
  paragraph:
    "Shared development setup and isolated environments means less time worry about configuration drift and broken dev environments.",
  image: {
    src: "/images/features/cloud-automation.webp",
    darkSrc: "/images/features/cloud-automation-dark.webp",
    alt: "All your data secured",
    width: "65%",
    height: "50%",
  },
};

export const quicklyRampContractors: Feature = {
  title: "Quickly ramp contractors",
  paragraph:
    "Stop worrying about access management, environment setups or shipping managed devices. CDEs enable anyone working on your product to access the exact same setup as a full-time developer.",
  previewComponent: Workspaces,
};

export const onboardFeatures: Feature[] = [
  onboardDevsWithOneClick,
  quicklyRampContractors,
  debugFasterThenEver,
  oneCofigToRuleThemAll,
];

/**Software Supply Chain Security Features,
 * Using on /solutions/supply-chain-security page
 *
 */

export const isolatedEnvironments: Feature = {
  title: "Fix vulnerabilities, centrally",
  paragraph:
    "CDEs run on a fully isolated and secured single-use containers, limiting the impact of changes to dependencies. Admins decide which configs and images to apply globally and can fix vulnerabilities instantly across an entire team.",
  terminal: {
    source: linuxSource,
    dark: true,
    shadow: false,
    narrow: true,
    skipToEnd: true,
  },
};

export const allYourDataSecured: Feature = {
  title: "Your code, secured",
  paragraph:
    "Source code is centrally and safely stored in the cloud, never locally. Additionally, all data is encrypted at rest and connections to CDEs are encrypted in transit.",
  image: {
    src: "/images/features/encoded-data.webp",
    darkSrc: "/images/features/encoded-data-dark.webp",
    alt: "Secure data movement",
    width: "90%",
    height: "90%",
  },
};

export const lockDownYourSourceCode: Feature = {
  title: "Centrally manage configs and secrets ",
  paragraph:
    "Platform teams can enforce organisational security policies within CDEs. Manage and share dev environment configurations and secrets data from one place.",
  image: {
    src: "/images/features/cloud-automation.webp",
    darkSrc: "/images/features/cloud-automation-dark.webp",
    alt: "All your data secured",
    width: "65%",
    height: "50%",
  },
};

export const secureDataMovement: Feature = {
  title: "Secure data movement",
  paragraph:
    "Gitpod is GDPR compliant, SOC 2 Type II compliant and provides clients with Data Processing Agreements (DPA) incorporating the Standard Contractual Clauses (SCC) for International Data Transfers.",
  image: {
    src: "/images/features/secure-data.webp",
    darkSrc: "/images/features/secure-data-dark.webp",
    alt: "Secure data movement",
    width: "75%",
    height: "75%",
  },
  moreButton: {
    href: "https://app.safebase.io/portal/71ccd717-aa2d-4a1e-942e-c768d37e9e0c/preview?product=default",
    text: "View trust center",
  },
};

export const supplyChainSecurityFeatures: Feature[] = [
  lockDownYourSourceCode,
  isolatedEnvironments,
  allYourDataSecured,
  secureDataMovement,
];

export const features: Feature[] = [
  worksOnAnyMachineFeature,
  onboardNewHires,
  allYourDataSecured,
  // reduceTimeToResolution,
  // {
  //   title: "Works on my machine - and yours",
  //   paragraph:
  //     "Spin up pre-configured, standardized dev environments from any git context when you need them and close them when you're done. You won’t go back to the friction of long-living stateful environments. ",
  //   previewComponent: Workspaces,
  // },
];

export const featureCards: {
  card: Card;
  pill?: { text: string; variant: "pink" | "orange" | "gray" | "violet" };
}[] = [
  {
    pill: {
      text: "Early access",
      variant: "pink",
    },
    card: {
      title: "Dedicated",
      text: "Dedicated is a single-tenant deployment of Gitpod CDEs within your cloud perimeter. This is great for organizations who require maximum control of their cloud resources and data storage and would like to connect to their internal systems. ",
      icon: {
        src: "/svg/icons/secure.svg",
        alt: "Cloud Icon",
      },
      // link: {
      //   href: "/dedicated",
      //   text: "Request early access",
      // },
    },
  },
  {
    card: {
      title: "SaaS",
      text: "Gitpod.io is a cloud-based, fully managed software-as-a-service deployment option of Gitpod CDEs. This is great for teams who are ready to get started right away.",
      icon: {
        src: "/svg/icons/cloud.svg",
        alt: "Cloud Icon",
      },
      // link: {
      //   href: "/contact/get-demo",
      //   text: "Get a demo",
      // },
    },
  },
];
