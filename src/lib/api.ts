export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface Company {
  id: string;
  category: string;
  avatar?: string;
  name: string;
  status: Status;
  promotion: boolean;
  country: string;
  date: string;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getCompanies = (init?: RequestInit) => {
  return sendRequest<Company[]>(buildUrl('companies'), init);
};

export const stats=[
  {label:"Total promotions",
    counter:432,
  },
  {label:"Total category",
    counter:8,},
  {label:"New companies",
    counter:28,},
  {label:"Total active companies",
    counter:670,}
];

export enum StatCardType {
  Dark = 'dark',
  Light = 'light',
};

export const categoriesStats=[
    {label:"Products",
    counter:4,
  },
      {label:"Products",
    counter:8,
  },
      {label:"Products",
    counter:26,
  },
      {label:"Products",
    counter:1,
  },
      {label:"Products",
    counter:37,
  },
      {label:"Products",
    counter:22,
  },
      {label:"Products",
    counter:4,
  },
      {label:"Products",
    counter:12,
  },
]


