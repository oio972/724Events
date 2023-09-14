/*
import { render, screen } from "@testing-library/react";
import Home from "./index";
import EventCard from "../../components/EventCard/index";

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    render(<EventCard />);
    const events = screen.getByTestId("events-testid");
    const cards = screen.getByTestId("card-testid");
    expect(events).toBeInTheDocument();
    expect(cards).toBeInTheDocument();
  });
  it("a list a people is displayed", () => {
    render(<Home />);
    const people = screen.getByTestId("people-testid");
    expect(people).toBeInTheDocument();
    expect(screen.getByText("Animateur"));
  });
  it("a footer is displayed", () => {
    render(<Home />);
    const footer = screen.getByTestId("footer-testid");
    expect(footer).toBeInTheDocument();
    expect(screen.getByText("Notre derniére prestation"));
    expect(screen.getByText("Contactez-nous"));
  });
  it("an event card, with the last event, is displayed", () => {
    render(
      <>
        <Home />
        <EventCard />
      </>
    );
    const lastCard = screen.getByTestId("card-testid");
    const lastImg = screen.getAllByTestId("card-image-testid");
    expect(lastCard).toBeInTheDocument();
    expect(lastCard.getAttribute("class").includes("Eventcard--small"));
    expect(lastImg).not.toBeNaN();
    expect(lastImg).toBeDefined();
  });
});
*/


import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await waitFor(() => screen.findByText("Message envoyé !"), { timeout: 3000 });
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    const events = screen.queryAllByTestId("card-image-testid").length;
    expect(events).toBeGreaterThan(1);
  })
  it("a list a people is displayed", async () => {
    render(<Home />);
    const people = screen.queryAllByTestId("people-testid").length;
    expect(people).toBe(6); 
  })
  it("a footer is displayed", async () => {
    render(<Home />);
    screen.findByTestId("footer-testid");
  })
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    waitFor(() => screen.findByTestId("lastEvent-testid"));
  })
});

