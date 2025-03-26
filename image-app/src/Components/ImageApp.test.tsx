import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import ImageApp from "./ImageApp";

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

let container: HTMLElement;
beforeEach(async () => {
  render(
    <ApolloProvider client={client}>
      <ImageApp />
    </ApolloProvider>
  );
  container = screen.getByTestId("container");
  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
});

test("1. count of children right after component was mounted", () => {
  expect(container.children.length).toBe(3);
});

test("2. if `Mrs. Dennis Schulist` is in the document", () => {
  expect(screen.getByText("Mrs. Dennis Schulist")).toBeInTheDocument();
});

test("3. count of children after initial 5 photos have been fetched", async () => {
  expect(container.children.length).toBe(8);
});

test("4. count of children after click handler has been called for the first time - 7 additional photos per click", async () => {
  expect(container.children.length).toBe(8);
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button")).toBeDisabled();
  expect(container.children.length).toBe(14);
});

test("5. image with id 2558 to be in the document", async () => {
  expect(screen.getByAltText("2558")).toBeInTheDocument();
});
