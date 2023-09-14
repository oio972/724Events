import LastEvent from "./index";

describe("GetLastEvent helper", () => {
  describe("When getLastEvent is called", () => {
    it("the function return last event element", () => {
      const events = [
        {
          id: 1,
          type: "soirée entreprise",
          date: "2022-04-29T20:28:45.744Z",
          title: "Mega Event",
        },
        {
          id: 2,
          type: "expérience digitale",
          date: "2022-01-29T20:28:45.744Z",
          title: "#DigitonPARIS",
        },
        {
          id: 3,
          type: "conférence",
          date: "2022-03-29T20:28:45.744Z",
          title: "Conférence &co-responsable",
        },
      ];
      const lastEvent = LastEvent(events);
      expect(lastEvent.id).toBe(1);
    });
    it("the function return last array element if undefined date", () => {
      const events = [
        {
          id: 1,
          type: "soirée entreprise",
          title: "Mega Event",
        },
        {
          id: 2,
          type: "expérience digitale",
          title: "#DigitonPARIS",
        },
        {
          id: 3,
          type: "conférence",
          title: "Conférence &co-responsable",
        },
      ];
      const lastEvent = LastEvent(events);
      expect(lastEvent.id).toBe(3);
    });
    it("the function return undefined if empty params", () => {
      expect(LastEvent()).toBeUndefined();
    });
  });
});