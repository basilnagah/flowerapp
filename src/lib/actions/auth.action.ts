"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { JSON_HEADER } from "../constants/api.constants";

export const registerAction = async (fields: RegisterFields) => {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<LoginResponse> = await response.json();

  return payload;
};

export const forgetAction = async (fields: RegisterFields) => {
  const response = await fetch(`${process.env.API}/auth/forgotPassword`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: APIResponse<forgetResponse> = await response.json();

  return payload;
};

export const recoverAction = async (fields: RegisterFields) => {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: RecoverResponse = await response.json();

  return payload;
};

export const setPasswordAction = async (fields: RegisterFields) => {
  const response = await fetch(`${process.env.API}/auth/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(fields),
    headers: {
      ...JSON_HEADER,
    },
  });

  const payload: setPasswordResponse = await response.json();

  return payload;
};

export const getDetails = async (PID: string) => {
  try {
    const response = await fetch(
      `https://flower.elevateegy.com/api/v1/products/${PID}`,
      {
        cache: "no-store", // Ensure fresh data
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    const payload: ProductDetails = await response.json();

    return payload;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error; // Let the caller handle the error
  }
};

export const addProductToCart = async (
  pID: any,
  pQuantity: any,
  token: any
) => {
  const response = await fetch("https://flower.elevateegy.com/api/v1/cart", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product: pID,
      quantity: pQuantity,
    }),
  });

  const data = await response.json();

  return data;
};

export const getProductFromCart = async (token: any) => {
  const response = await fetch("https://flower.elevateegy.com/api/v1/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store", 
  });

  const data = await response.json();

  return data;
};

