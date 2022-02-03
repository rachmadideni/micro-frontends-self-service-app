import _ from "lodash";
import moment from "moment";

import MyWorkActiveIcon from "../assets/images/icon-my-work-active.svg";
import MyWorkIcon from "../assets/images/icon-my-work.svg";
import workUtil from "../utils/work";

import countries from "./countries";

export const UNDER_MAINTENANCE = true;

export const DEVICE_TYPE_DETAILS = {
  computer: "Default screen 1366px width, 768px height",
  tablet: "Default screen (vertical) 810px height, 1080px width",
  phone: "Default screen 375px width, 812px height",
};

export const ROUTES = {
  INTAKE_FORM: "/self-service/wizard",
  HOME_PAGE: "/self-service",
  DASHBOARD_PAGE: "/self-service/dashboard",
};

/**
 * All action types
 */
export const ACTION_TYPE = {
  /*
    withAuthentication
   */
  AUTH_USER_SUCCESS: "AUTH_USER_SUCCESS",
  AUTH_USER_ERROR: "AUTH_USER_ERROR",
};

/**
 * Supported Button Sizes
 */
export const BUTTON_SIZE = {
  TINY: "tiny",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

/**
 * Supported Button Types
 */
export const BUTTON_TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  WARNING: "warning",
  ROUNDED: "rounded",
};

export const MAX_COMPLETED_STEP = "MAX_COMPLETED_STEP";
export const HELP_BANNER = {
  title: "Not seeing what you need?",
  description:
    "Topcoder also offers solutions for multiple other technical needs and problems. We have community members expertly skilled in Development, UX / UI Design, Data Science, Quality Assurance, and more. We’d love to talk with you about all of our services.",
};

/**
 * Industry List
 */
export const IndustryList = [
  { label: "Accounting & Financial", value: "accounting-financial" },
  { label: "Agriculture", value: "agriculture" },
  { label: "Animal & Pet", value: "animal-pet" },
  { label: "Architectural", value: "architectural" },
  { label: "Art & Design", value: "art-design" },
  { label: "Attorney & Law", value: "attorney-law" },
  { label: "Automotive", value: "automotive" },
  { label: "Bar & Nightclub", value: "bar-nightclub" },
  { label: "Business & Consulting", value: "business-consulting" },
  { label: "Childcare", value: "childcare" },
  { label: "Cleaning & Maintenance", value: "cleaning-maintenance" },
  { label: "Communications", value: "communications" },
  { label: "Community & Nonprofit", value: "community-nonprofit" },
  { label: "Computer", value: "computer" },
  { label: "Construction", value: "construction" },
  { label: "Cosmetic & Beauty", value: "cosmetic-beauty" },
  { label: "Dating", value: "dating" },
  { label: "Education", value: "education" },
  { label: "Entertainment & the Arts", value: "entertainment-the-arts" },
  { label: "Environmental", value: "environmental" },
  { label: "Fashion", value: "fashion" },
  { label: "Food & Drink", value: "food-drink" },
  { label: "Games & Recreation", value: "games-recreation" },
  { label: "Home furnishing", value: "home-furnishing" },
  { label: "Industrial", value: "industrial" },
  { label: "Internet", value: "internet" },
  { label: "Landscaping", value: "landscaping" },
  { label: "Medical & Pharmaceutical", value: "medical-pharmaceutical" },
  { label: "Photography", value: "photography" },
  { label: "Physical Fitness", value: "physical-fitness" },
  { label: "Political", value: "political" },
  { label: "Real Estate & Mortgage", value: "real-estate-mortgage" },
  { label: "Religious", value: "religious" },
  { label: "Restaurant", value: "restaurant" },
  { label: "Retail", value: "retail" },
  { label: "Security", value: "security" },
  { label: "Spa & Esthetics", value: "spa-esthetics" },
  { label: "Sport", value: "sport" },
  { label: "Travel & Hotel", value: "travel-hotel" },
  { label: "Wedding Service", value: "wedding-service" },
];

/**
 * Design Options
 */
export const DesignOptions = [
  {
    label: "Yes, allow designers to recommend stock photos",
    value: "allow",
  },
  { label: "No, Do not Stock Photos", value: "not-allow" },
];

/**
 * ProgressLevels
 */
export const ProgressLevels = [
  {
    label: "Basic Info",
    url: "/self-service/basic-info",
    trueIndex: 2,
    showIndex: 1,
  },
  {
    label: "Website Purpose",
    url: "/self-service/website-purpose",
    trueIndex: 3,
    showIndex: 2,
  },
  {
    label: "Page Details",
    url: "/self-service/page-details",
    trueIndex: 4,
    showIndex: 3,
  },
  {
    label: "Branding",
    url: "/self-service/branding",
    trueIndex: 5,
    showIndex: 4,
  },
  { label: "Review", url: "/self-service/review", trueIndex: 6, showIndex: 5 },
  {
    label: "Payment",
    url: "/self-service/payment",
    trueIndex: 7,
    showIndex: 6,
  },
];

/**
 * page options
 */
export const PageOptions = [
  { label: "1 page", price: 50, value: false },
  { label: "2 pages", price: 100, value: false },
  { label: "3 pages", price: 150, value: false },
  { label: "4 pages", price: 200, value: false },
  { label: "5 pages", price: 300, value: false },
];

/**
 * page options
 */
export const DeviceOptions = [
  { label: "Computer", price: 0 },
  { label: "Tablet", price: 300 },
  { label: "Phone", price: 500 },
];

/**
 * page options
 */
export const DeliverablesOptions = [
  { label: "Any (recommended for best participation)", value: false },
  { label: "Adobe XD", value: false },
  { label: "Figma", value: false },
  { label: "Sketch", value: false },
  { label: "Other", value: false },
];

/**
 * page options
 */
export const AllowStockOptions = [
  { label: "Yes, allow stock photos", value: true },
  { label: "No, do not allow stock photos", value: false },
];

/**
 * Work Types
 */
export const workTypes = [
  {
    title: "Website Development",
    subTitle:
      "Our developers can bring your website designs to life! We'll get your website ready for the world to see.",
    price: 499,
    comingSoon: true,
  },
  { title: "Mobile", subTitle: "Example or description text", price: 499 },
  {
    title: "Architecture",
    subTitle: "Example or description text",
    price: 499,
  },
  { title: "API", subTitle: "Example or description text", price: 499 },
  {
    title: "Data Science & AI",
    subTitle:
      "Data Mining & Analysis will empower you to reach your goals faster. Tap data science geniuses from our pool of experts.",
    price: 499,
    comingSoon: true,
  },
  {
    title: "Visual Design",
    subTitle: "Example or description text",
    price: 499,
  },
];

/**
 * Web Work Types
 */
export const webWorkTypes = [
  {
    title: "Website Design",
    subTitle:
      "​​Create a beautiful custom visual design for your website. Specify the scope and device types, your vision, and receive up to 5 modern designs.",
    price: 649,
    featured: true,
  },
  {
    title: "Website Development",
    subTitle: "Information to help understand what this category would include",
    price: 499,
  },
  {
    title: "Web App Design",
    subTitle: "Information to help understand what this category would include",
    price: 499,
  },
];

/**
 * Color Options
 */
export const ColorOptionsItems = [
  { name: "Any Colors", className: "angularGradient" },
  { name: "Blues", className: "blues" },
  { name: "Aquas", className: "aquas" },
  { name: "Greens", className: "greens" },
  { name: "Purples", className: "purples" },
  { name: "Pinks", className: "pinks" },
  { name: "Reds", className: "reds" },
  { name: "Oranges", className: "oranges" },
  { name: "Yellows", className: "yellows" },
  { name: "Light Grays", className: "lightGrays" },
  { name: "Dark Grays", className: "darkGrays" },
];

/**
 * Color Options
 */
export const tabNames = ["summary", "details", "messaging", "solutions"];

export const disabledSidebarRoutes = [
  "/self-service/basic-info",
  "/self-service/website-purpose",
  "/self-service/page-details",
  "/self-service/branding",
  "/self-service/review",
  "/self-service/payment",
  "/self-service/thank-you",
  "/self-service/wizard",
  "/self-service/profile",
  "/self-service/login-prompt",
  "/self-service/work-items/*",
];

export const menuItems = [
  {
    item: "My Work",
    url: "/self-service/dashboard",
    icon: <MyWorkIcon />,
    activeIcon: <MyWorkActiveIcon />,
  },
];

export const ACTIONS = {
  FORM: {
    UPDATE_PRICE: "UPDATE_PRICE",
    UPDATE_ADDITIONAL_PRICE: "UPDATE_ADDITIONAL_PRICE",
    SAVE_WORK_TYPE: "SAVE_WORK_TYPE",
    SAVE_BASIC_INFO: "SAVE_BASIC_INFO",
    SAVE_WEBSITE_PURPOSE: "SAVE_WEBSITE_PURPOSE",
    SAVE_PAGE_DETAILS: "SAVE_PAGE_DETAILS",
    SAVE_BRANDING: "SAVE_BRANDING",
    ADD_DEVICE_PRICE: "ADD_DEVICE_PRICE",
    UPDATE_PAGE_PRICE: "UPDATE_PAGE_PRICE",
    REVIEW_CONFIRMED: "REVIEW_CONFIRMED",
    SAVE_FORM: "SAVE_FORM",
    RESET_INTAKE_FORM: "RESET_INTAKE_FORM",
    TOGGLE_SUPPORT_MODAL: "TOGGLE_SUPPORT_MODAL",
    CREATE_SUPPORT_TICKET: "CREATE_SUPPORT_TICKET",
  },
  PROGRESS: {
    SET_ITEM: "SET_ITEM",
  },
  AUTO_SAVE: {
    COOKIE_CLEARED: "COOKIE_CLEARED",
    TRIGGER_AUTO_SAVE: "TRIGGER_AUTO_SAVE",
    INIT_ERRORED: "INIT_ERRORED",
  },
  CHALLENGE: {
    GET_CHALLENGE: "GET_CHALLENGE",
  },
  MY_WORK: {
    LOAD_WORKS_ERROR: "LOAD_WORKS_ERROR",
    LOAD_WORKS_PENDING: "LOAD_WORKS_PENDING",
    LOAD_WORKS_SUCCESS: "LOAD_WORKS_SUCCESS",
  },
  PROFILE: {
    GET_PROFILE: "GET_PROFILE",
    UPDATE_BASIC_INFO_PENDING: "UPDATE_BASIC_INFO_PENDING",
    UPDATE_BASIC_INFO_SUCCESS: "UPDATE_BASIC_INFO_SUCCESS",
    UPDATE_BASIC_INFO_ERROR: "UPDATE_BASIC_INFO_ERROR",
  },
  WORK: {
    GET_WORK: "GET_WORK",
    GET_WORK_PENDING: "GET_WORK_PENDING",
    GET_WORK_SUCCESS: "GET_WORK_SUCCESS",
    GET_WORK_ERROR: "GET_WORK_ERROR",
    GET_SUMMARY: "GET_SUMMARY",
    GET_DETAILS: "GET_DETAILS",
    GET_SOLUTIONS: "GET_SOLUTIONS",
    GET_SOLUTIONS_PENDING: "GET_SOLUTIONS_PENDING",
    GET_SOLUTIONS_SUCCESS: "GET_SOLUTIONS_SUCCESS",
    GET_SOLUTIONS_ERROR: "GET_SOLUTIONS_ERROR",
    DOWNLOAD_SOLUTION: "DOWNLOAD_SOLUTION",
    DOWNLOAD_SOLUTION_PENDING: "DOWNLOAD_SOLUTION_PENDING",
    DOWNLOAD_SOLUTION_SUCCESS: "DOWNLOAD_SOLUTION_SUCCESS",
    DOWNLOAD_SOLUTION_ERROR: "DOWNLOAD_SOLUTION_ERROR",
    SAVE_SURVEY: "SAVE_SURVEY",
    SAVE_SURVEY_PENDING: "SAVE_SURVEY_PENDING",
    SAVE_SURVEY_SUCCESS: "SAVE_SURVEY_SUCCESS",
    SAVE_SURVEY_ERROR: "SAVE_SURVEY_ERROR",
    SET_IS_SAVING_SURVEY_DONE: "SET_IS_SAVING_SURVEY_DONE",
    GET_FORUM_NOTIFICATIONS: "GET_FORUM_NOTIFICATIONS",
    GET_FORUM_NOTIFICATIONS_PENDING: "GET_FORUM_NOTIFICATIONS_PENDING",
    GET_FORUM_NOTIFICATIONS_SUCCESS: "GET_FORUM_NOTIFICATIONS_SUCCESS",
    GET_FORUM_NOTIFICATIONS_ERROR: "GET_FORUM_NOTIFICATIONS_ERROR",
  },
};

export const AUTO_SAVE_FORM = "AUTO_SAVE_FORM";

export const CACHED_CHALLENGE_ID = "CACHED_CHALLENGE_ID";

export const CHALLENGE_FIELD_VALUES = {
  trackId: "5fa04185-041f-49a6-bfd1-fe82533cd6c8",
  typeId: "927abff4-7af9-4145-8ba1-577c16e64e2e",
  timelineTemplateId: "918f6a3e-1a63-4680-8b5e-deb95b1411e7",
};

// TODO: make this dependant to the selected work type
export const DEFAULT_TIMELINE = [
  {
    // Screening
    phaseId: "2d7d3d85-0b29-4989-b3b4-be7f2b1d0aa6",
    duration: 14400,
  },
  {
    // Review
    phaseId: "aa5a3f78-79e0-4bf7-93ff-b11e8f5b398b",
    duration: 144000,
  },
  {
    // Approval
    phaseId: "ad985cff-ad3e-44de-b54e-3992505ba0ae",
    duration: 14400,
  },
];

export const INTAKE_FORM_ROUTES = [
  "/self-service/wizard",
  "/self-service/basic-info",
  "/self-service/website-purpose",
  "/self-service/page-details",
  "/self-service/login-prompt",
  "/self-service/branding",
  "/self-service/review",
  "/self-service/payment",
  "/self-service/thank-you",
];

export const CHALLENGE_STATUS = {
  ACTIVE: "Active",
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  DRAFT: "Draft",
  NEW: "New",
  APPROVED: "Approved",
};

export const WORK_STATUS_MAP = {
  [CHALLENGE_STATUS.ACTIVE]: "Started",
  [CHALLENGE_STATUS.CANCELLED]: "Redirected",
  [CHALLENGE_STATUS.COMPLETED]: "Done",
  [CHALLENGE_STATUS.DRAFT]: "Submitted",
  [CHALLENGE_STATUS.NEW]: "Draft",
};

export const WORK_STATUS_ORDER = {
  [CHALLENGE_STATUS.NEW]: 0, // Draft
  [CHALLENGE_STATUS.DRAFT]: 1, // Submitted
  [CHALLENGE_STATUS.ACTIVE]: 2, // In progress
  [CHALLENGE_STATUS.COMPLETED]: 3,
  [CHALLENGE_STATUS.CANCELLED]: 4, // Directed to sales
  Unknown: 999,
};
export const WORK_STATUSES = {
  Draft: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.NEW],
    value: CHALLENGE_STATUS.NEW,
    color: "#555555",
  },
  Submitted: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.DRAFT],
    value: CHALLENGE_STATUS.DRAFT,
    color: "#12C188",
  },
  InProgress: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.ACTIVE],
    value: CHALLENGE_STATUS.ACTIVE,
    color: "#12C188",
  },
  Completed: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.COMPLETED],
    value: CHALLENGE_STATUS.COMPLETED,
    color: "#555555",
  },
  DirectedToSales: {
    name: WORK_STATUS_MAP[CHALLENGE_STATUS.CANCELLED],
    value: CHALLENGE_STATUS.CANCELLED,
    color: "#F46500",
  },
};

export const WORK_TIMELINE = [
  {
    title: "SUBMITTED",
    date: "created",
    completed: (work) => {
      const submitted =
        WORK_STATUS_ORDER[work.status] >
        WORK_STATUS_ORDER[WORK_STATUSES.Draft.value];
      return submitted;
    },
  },
  {
    title: "STARTED",
    date: (work) => {
      const phase = work.phases.find((phase) => phase.name === "Registration");
      return phase && workUtil.phaseStartDate(phase);
    },
    active: (work) => {
      const phase = work.phases.find((phase) => phase.name === "Submission");
      const isPhaseOpen =
        phase && phase.isOpen && moment(workUtil.phaseEndDate(phase)).isAfter();
      return work.status === WORK_STATUSES.InProgress.value && isPhaseOpen;
    },
    completed: (work) => {
      const phase = work.phases.find((phase) => phase.name === "Submission");
      const isPhaseOpen =
        phase && moment(workUtil.phaseEndDate(phase)).isBefore();
      const didStart =
        WORK_STATUS_ORDER[work.status] >=
        WORK_STATUS_ORDER[WORK_STATUSES.InProgress.value];
      return isPhaseOpen && didStart;
    },
  },
  {
    title: "IN REVIEW",
    date: (work) => {
      let phase = work.phases.find((phase) => phase.name === "Approval");

      if (!phase) {
        phase = work.phases.find((phase) => phase.name === "Review");
      }
      return workUtil.phaseEndDate(phase);
    },
    active: (work) => {
      const reviewPhases = _.filter(work.phases, (p) =>
        _.includes(["Approval", "Screening", "Review"], p.name)
      );
      return _.filter(reviewPhases, (p) => p.isOpen).length > 0;
    },
    completed: (work) => {
      let phase = work.phases.find((phase) => phase.name === "Approval");

      if (!phase) {
        phase = work.phases.find((phase) => phase.name === "Review");
      }
      const isPhaseClosed = moment(workUtil.phaseEndDate(phase)).isBefore();
      const didStart =
        WORK_STATUS_ORDER[work.status] >=
        WORK_STATUS_ORDER[WORK_STATUSES.InProgress.value];
      return isPhaseClosed && didStart;
    },
  },
  {
    name: "downloads-ready",
    title: "SOLUTIONS READY",
    date: (work) => {
      let phase = work.phases.find((phase) => phase.name === "Approval");

      if (!phase) {
        phase = work.phases.find((phase) => phase.name === "Review");
      }

      return phase && workUtil.phaseEndDate(phase);
    },
    active: (work) => {
      let phase = work.phases.find((phase) => phase.name === "Approval");

      const isReviewPhaseOpen =
        phase && phase.isOpen && moment(workUtil.phaseEndDate(phase)).isAfter();
      return isReviewPhaseOpen;
    },
    completed: (work) => {
      let phase = work.phases.find((phase) => phase.name === "Approval");

      const isReviewPhaseEnded =
        phase && moment(workUtil.phaseEndDate(phase)).isBefore();

      return (
        isReviewPhaseEnded && work.status === WORK_STATUSES.Completed.value
      );
    },
  },
  {
    name: "mark-as-done",
    title: "DONE",
    date: (work) => {
      if (work.status === WORK_STATUSES.Completed.value) {
        return work.updated;
      }
    },
    active: (work) => work.status === WORK_STATUSES.Completed.value,
    completed: (work) => {
      const customerFeedbacked =
        work.metadata &&
        work.metadata.find((item) => item.name === "customerFeedback");
      return (
        work.status === WORK_STATUSES.Completed.value && customerFeedbacked
      );
    },
    hidden: (work) => {
      const customerFeedbacked =
        work.metadata &&
        work.metadata.find((item) => item.name === "customerFeedback");
      return (
        work.status === WORK_STATUSES.Completed.value && customerFeedbacked
      );
    },
  },
  {
    name: "send-to-solutions-expert",
    title: "REDIRECTED",
    date: (work) => {
      if (work.status === WORK_STATUSES.DirectedToSales.value) {
        return work.updated;
      }
    },
    completed: true,
    hidden: (work) => {
      return work.status !== WORK_STATUSES.DirectedToSales.value;
    },
  },
];

export const SURVEY_QUESTIONS = [
  {
    name: "How happy are you with the quality of work?",
    value: 0,
  },
  {
    name: "How easy was it to get the results you wanted?",
    value: 0,
  },
  {
    name: "How likely are you to recommend Topcoder?",
    value: 0,
  },
  {
    name: "What can we do to make your experience better?",
    value: "",
  },
];

export const COUNTRY_OPTIONS = countries.map((ct) => ({
  label: ct.name,
  value: ct.code,
}));

export const COST_TIMELINE_MAPPING = [
  [
    {
      total: 649,
      submissionDuration: 2,
      totalDuration: 4,
      costPerAdditionalPage: 250,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 100,
            },
            {
              type: "USD",
              value: 50,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 60,
            },
            {
              type: "USD",
              value: 60,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 1 device
    {
      total: 748,
      submissionDuration: 2,
      totalDuration: 4,
      costPerAdditionalPage: 349,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 150,
            },
            {
              type: "USD",
              value: 75,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 70,
            },
            {
              type: "USD",
              value: 70,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 2 devices
    {
      total: 847,
      submissionDuration: 2,
      totalDuration: 4,
      costPerAdditionalPage: 448,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 200,
            },
            {
              type: "USD",
              value: 100,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 80,
            },
            {
              type: "USD",
              value: 80,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 3 devices
  ], // 1 page

  [
    {
      total: 899,
      submissionDuration: 2,
      totalDuration: 4,
      costPerAdditionalPage: 250,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 175,
            },
            {
              type: "USD",
              value: 88,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 70,
            },
            {
              type: "USD",
              value: 70,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 1 device
    {
      total: 1097,
      submissionDuration: 2,
      totalDuration: 4,
      costPerAdditionalPage: 349,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 275,
            },
            {
              type: "USD",
              value: 138,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 80,
            },
            {
              type: "USD",
              value: 80,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 2 devices
    {
      total: 1295,
      submissionDuration: 2,
      totalDuration: 4,
      costPerAdditionalPage: 448,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 325,
            },
            {
              type: "USD",
              value: 163,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 90,
            },
            {
              type: "USD",
              value: 90,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 3 devices
  ], // 2 pages

  [
    {
      total: 1149,
      submissionDuration: 3,
      totalDuration: 5,
      costPerAdditionalPage: 250,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 250,
            },
            {
              type: "USD",
              value: 125,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 80,
            },
            {
              type: "USD",
              value: 80,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 1 device
    {
      total: 1446,
      submissionDuration: 3,
      totalDuration: 5,
      costPerAdditionalPage: 349,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 400,
            },
            {
              type: "USD",
              value: 200,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 90,
            },
            {
              type: "USD",
              value: 90,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 2 devices
    {
      total: 1743,
      submissionDuration: 3,
      totalDuration: 5,
      costPerAdditionalPage: 448,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 450,
            },
            {
              type: "USD",
              value: 225,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 100,
            },
            {
              type: "USD",
              value: 100,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 3 devices
  ], // 3 pages

  [
    {
      total: 1399,
      submissionDuration: 3,
      totalDuration: 5,
      costPerAdditionalPage: 250,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 325,
            },
            {
              type: "USD",
              value: 163,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 90,
            },
            {
              type: "USD",
              value: 90,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 1 device
    {
      total: 1795,
      submissionDuration: 3,
      totalDuration: 5,
      costPerAdditionalPage: 349,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 525,
            },
            {
              type: "USD",
              value: 263,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 100,
            },
            {
              type: "USD",
              value: 100,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 2 devices
    {
      total: 2191,
      submissionDuration: 4,
      totalDuration: 6,
      costPerAdditionalPage: 448,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 575,
            },
            {
              type: "USD",
              value: 288,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 110,
            },
            {
              type: "USD",
              value: 110,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 3 devices
  ], // 4 pages

  [
    {
      total: 1649,
      submissionDuration: 3,
      totalDuration: 5,
      costPerAdditionalPage: 250,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 400,
            },
            {
              type: "USD",
              value: 200,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 100,
            },
            {
              type: "USD",
              value: 100,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 1 device
    {
      total: 2144,
      submissionDuration: 3,
      totalDuration: 5,
      costPerAdditionalPage: 349,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 650,
            },
            {
              type: "USD",
              value: 325,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 110,
            },
            {
              type: "USD",
              value: 110,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 2 devices
    {
      total: 2639,
      submissionDuration: 4,
      totalDuration: 6,
      costPerAdditionalPage: 448,
      prizeSets: [
        {
          prizes: [
            {
              type: "USD",
              value: 725,
            },
            {
              type: "USD",
              value: 363,
            },
            {
              type: "USD",
              value: 40,
            },
            {
              type: "USD",
              value: 30,
            },
            {
              type: "USD",
              value: 20,
            },
          ],
          description: "Challenge Prizes",
          type: "placement",
        },
        {
          prizes: [
            {
              type: "USD",
              value: 110,
            },
            {
              type: "USD",
              value: 110,
            },
          ],
          description: "Reviewer Payment",
          type: "reviewer",
        },
      ],
    }, // 3 devices
  ], // 5 pages
];
