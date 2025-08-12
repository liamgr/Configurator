// In src/panel/OSDElements.vue
// Update the elementOptions() computed property:

elementOptions() {
  const elements = [
    { name: "CALLSIGN", enabled: true, text: this.callsign },
    { name: "CELL COUNT", enabled: true, text: "1S" },
    { name: "FUELGAUGE VOLTS", enabled: true, text: " 4.3\x70" },
    { name: "FILTERED VOLTS", enabled: true, text: " 4.3\x06" },
    { name: "GYRO TEMP", enabled: true, text: "  40\x0e" },
    { name: "FLIGHT MODE", enabled: true, text: "   ACRO   " },
    { name: "RSSI", enabled: true, text: "  90\x01" },
    { name: "STOPWATCH", enabled: true, text: "01:20" },
    {
      name: "SYSTEM STATUS",
      enabled: true,
      text: "     **FAILSAFE**     ",
    },
    { name: "THROTTLE", enabled: true, text: "  50\x04" },
    { name: "VTX CHANNEL", enabled: true, text: "R:7:1" },
    { name: "CURRENT", enabled: true, text: "0.00\x9a" },
  ];
  if (this.profile.profileVersionGt("0.2.2")) {
    elements.push({
      name: "CROSSHAIR",
      enabled: true,
      text: "\x72\x73\x74",
    });
  }
  if (this.profile.profileVersionGt("0.2.3")) {
    elements.push({
      name: "CURRENT DRAWN",
      enabled: true,
      text: "0.00\x07",
    });
  }
  if (this.profile.profileVersionGt("0.2.4")) {
    elements.push({
      name: "WATTS",
      enabled: true,
      text: "0.0\x57",
    });
  }
  return elements;
},