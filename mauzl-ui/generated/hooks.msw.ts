/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Mauzl API
 * OpenAPI spec version: 1.0.0
 */
import { faker } from "@faker-js/faker";
import { HttpResponse, delay, http } from "msw";
import type {
  CategoryDto,
  PaginatedProductDto,
  ProductDto,
  UserDto,
} from "../models";

export const getUsersControllerFindMeResponseMock = (
  overrideResponse: Partial<UserDto> = {},
): UserDto => ({
  avatarUrl: faker.word.sample(),
  email: faker.word.sample(),
  firstName: faker.word.sample(),
  hashedRefreshToken: faker.word.sample(),
  id: faker.number.int({ min: undefined, max: undefined }),
  lastName: faker.word.sample(),
  role: faker.word.sample(),
  username: faker.word.sample(),
  ...overrideResponse,
});

export const getCategoriesControllerFindAllResponseMock = (): CategoryDto[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.word.sample(),
  }));

export const getCategoriesControllerFindOneResponseMock = (
  overrideResponse: Partial<CategoryDto> = {},
): CategoryDto => ({
  id: faker.number.int({ min: undefined, max: undefined }),
  name: faker.word.sample(),
  ...overrideResponse,
});

export const getProductsControllerFindAllResponseMock = (
  overrideResponse: Partial<PaginatedProductDto> = {},
): PaginatedProductDto => ({
  products: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    category: {
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.word.sample(),
    },
    description: faker.word.sample(),
    id: faker.number.int({ min: undefined, max: undefined }),
    images: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.word.sample()),
    name: faker.word.sample(),
    price: faker.number.int({ min: undefined, max: undefined }),
    status: faker.word.sample(),
    stock: faker.number.int({ min: undefined, max: undefined }),
  })),
  total: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getProductsControllerFindOneResponseMock = (
  overrideResponse: Partial<ProductDto> = {},
): ProductDto => ({
  category: {
    id: faker.number.int({ min: undefined, max: undefined }),
    name: faker.word.sample(),
  },
  description: faker.word.sample(),
  id: faker.number.int({ min: undefined, max: undefined }),
  images: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => faker.word.sample()),
  name: faker.word.sample(),
  price: faker.number.int({ min: undefined, max: undefined }),
  status: faker.word.sample(),
  stock: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getAppControllerGetHelloMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getUsersControllerCreateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/users", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 201 });
  });
};

export const getUsersControllerFindAllMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/users", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getUsersControllerFindMeMockHandler = (
  overrideResponse?:
    | UserDto
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<UserDto> | UserDto),
) => {
  return http.get("*/users/me", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getUsersControllerFindMeResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getUsersControllerFindOneMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/users/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getUsersControllerUpdateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.patch("*/users/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getUsersControllerRemoveMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.delete("*/users/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getCategoriesControllerCreateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/categories", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 201 });
  });
};

export const getCategoriesControllerFindAllMockHandler = (
  overrideResponse?:
    | CategoryDto[]
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<CategoryDto[]> | CategoryDto[]),
) => {
  return http.get("*/categories", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getCategoriesControllerFindAllResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getCategoriesControllerFindOneMockHandler = (
  overrideResponse?:
    | CategoryDto
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<CategoryDto> | CategoryDto),
) => {
  return http.get("*/categories/:id", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getCategoriesControllerFindOneResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getCategoriesControllerUpdateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.patch("*/categories/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getCategoriesControllerRemoveMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.delete("*/categories/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getProductsControllerCreateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/products", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 201 });
  });
};

export const getProductsControllerFindAllMockHandler = (
  overrideResponse?:
    | PaginatedProductDto
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<PaginatedProductDto> | PaginatedProductDto),
) => {
  return http.get("*/products", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getProductsControllerFindAllResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getProductsControllerFindOneMockHandler = (
  overrideResponse?:
    | ProductDto
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<ProductDto> | ProductDto),
) => {
  return http.get("*/products/:id", async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getProductsControllerFindOneResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  });
};

export const getProductsControllerUpdateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.patch("*/products/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getProductsControllerRemoveMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.delete("*/products/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getOrdersControllerCreateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/orders", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 201 });
  });
};

export const getOrdersControllerFindAllMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/orders", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getOrdersControllerFindOneMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/orders/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getOrdersControllerUpdateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.patch("*/orders/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getOrdersControllerRemoveMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.delete("*/orders/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getOrderItemsControllerFindAllMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/order-items", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getOrderItemsControllerFindOneMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/order-items/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getPaymentsControllerFindAllMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/payments", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getPaymentsControllerFindOneMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/payments/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getWishListsControllerFindAllMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/wish-lists", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getWishListsControllerFindOneMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/wish-lists/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getReviewsControllerFindAllMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/reviews", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getReviewsControllerFindOneMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/reviews/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getClientsControllerFindAllMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/clients", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getClientsControllerFindOneMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/clients/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getAddressesControllerFindAllMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/addresses", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getAddressesControllerFindOneMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/addresses/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getAddressesControllerRemoveMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.delete("*/addresses/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getImageControllerUploadImageMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/images/upload", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 201 });
  });
};

export const getImageControllerGetImageLinkMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/images/:image", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getAuthControllerLoginMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/auth/login", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getAuthControllerRefreshTokenMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/auth/refresh", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 201 });
  });
};

export const getAuthControllerSignOutMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/auth/signout", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 201 });
  });
};

export const getAuthControllerGoogleLoginMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/auth/google/login", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getAuthControllerGoogleCallbackMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/auth/google/callback", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getContactControllerCreateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/contacts", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 201 });
  });
};

export const getContactControllerFindAllMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/contacts", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getContactControllerFindOneMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.get("*/contacts/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getContactControllerUpdateMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.patch>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.patch("*/contacts/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};

export const getContactControllerRemoveMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.delete>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.delete("*/contacts/:id", async (info) => {
    await delay(1000);
    if (typeof overrideResponse === "function") {
      await overrideResponse(info);
    }
    return new HttpResponse(null, { status: 200 });
  });
};
export const getMauzlAPIMock = () => [
  getAppControllerGetHelloMockHandler(),
  getUsersControllerCreateMockHandler(),
  getUsersControllerFindAllMockHandler(),
  getUsersControllerFindMeMockHandler(),
  getUsersControllerFindOneMockHandler(),
  getUsersControllerUpdateMockHandler(),
  getUsersControllerRemoveMockHandler(),
  getCategoriesControllerCreateMockHandler(),
  getCategoriesControllerFindAllMockHandler(),
  getCategoriesControllerFindOneMockHandler(),
  getCategoriesControllerUpdateMockHandler(),
  getCategoriesControllerRemoveMockHandler(),
  getProductsControllerCreateMockHandler(),
  getProductsControllerFindAllMockHandler(),
  getProductsControllerFindOneMockHandler(),
  getProductsControllerUpdateMockHandler(),
  getProductsControllerRemoveMockHandler(),
  getOrdersControllerCreateMockHandler(),
  getOrdersControllerFindAllMockHandler(),
  getOrdersControllerFindOneMockHandler(),
  getOrdersControllerUpdateMockHandler(),
  getOrdersControllerRemoveMockHandler(),
  getOrderItemsControllerFindAllMockHandler(),
  getOrderItemsControllerFindOneMockHandler(),
  getPaymentsControllerFindAllMockHandler(),
  getPaymentsControllerFindOneMockHandler(),
  getWishListsControllerFindAllMockHandler(),
  getWishListsControllerFindOneMockHandler(),
  getReviewsControllerFindAllMockHandler(),
  getReviewsControllerFindOneMockHandler(),
  getClientsControllerFindAllMockHandler(),
  getClientsControllerFindOneMockHandler(),
  getAddressesControllerFindAllMockHandler(),
  getAddressesControllerFindOneMockHandler(),
  getAddressesControllerRemoveMockHandler(),
  getImageControllerUploadImageMockHandler(),
  getImageControllerGetImageLinkMockHandler(),
  getAuthControllerLoginMockHandler(),
  getAuthControllerRefreshTokenMockHandler(),
  getAuthControllerSignOutMockHandler(),
  getAuthControllerGoogleLoginMockHandler(),
  getAuthControllerGoogleCallbackMockHandler(),
  getContactControllerCreateMockHandler(),
  getContactControllerFindAllMockHandler(),
  getContactControllerFindOneMockHandler(),
  getContactControllerUpdateMockHandler(),
  getContactControllerRemoveMockHandler(),
];
