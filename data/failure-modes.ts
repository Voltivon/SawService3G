/**
 * data/failure-modes.ts
 *
 * Structured failure-mode content for the 6 brand service pages.
 * Consumed by <FailureModesByModel> on:
 *   /services/hyd-mech-band-saw-repair
 *   /services/marvel-band-saw-repair
 *   /services/hem-saw-repair
 *   /services/amada-band-saw-repair
 *   /services/behringer-band-saw-repair
 *   /services/tsune-band-saw-repair
 *
 * Content lineage:
 *   - Marvel, HEM, Amada, Behringer, Tsune: restructured from the existing
 *     `commonIssues` / `faultCodeNotes` / `legacyNotes` arrays already on
 *     each brand page (no net-new claims invented).
 *   - Hyd-Mech: net-new, drafted using publicly-known hedged symptoms across
 *     the S, DM, V, M, and H series. Saw Service 3G is the only authorized
 *     dealer of the six brands, so language can reference "we see this
 *     regularly across our authorized-dealer service work" — but intervals
 *     and OEM part numbers remain hedged.
 *
 * Honesty rules enforced (CLAUDE.md §5, project memory):
 *   - Hyd-Mech is the ONLY brand where factory-authorized language is allowed.
 *   - All other brands: no factory-authorized / factory-OEM-certified wording.
 *     The "NOT authorized" disclaimer lives on each page separately.
 *   - Hedged language only — "typical," "common," "we often see" — never
 *     "always" / "every unit" / "guaranteed at X hours."
 *   - No OEM part numbers in any field.
 *   - No universal service-interval claims.
 */

export type Severity = "minor" | "major";

export type FailureMode = {
  /** Operator-facing observation (12-25 words). */
  symptom: string;
  /** 2-4 hedged causes, each 8-20 words. */
  commonCauses: string[];
  /** Optional — only when severity is clearly known. */
  severity?: Severity;
};

export type ModelGroup = {
  /** Grouped model label (e.g. "S-Series (S-20, S-20A, S-23A)"). */
  modelLabel: string;
  /** 3-5 failure modes per group. */
  modes: FailureMode[];
};

export const failureModesByBrand: Record<string, ModelGroup[]> = {
  // -------------------------------------------------------------------------
  // HYD-MECH — net-new content. Authorized-dealer language allowed.
  // -------------------------------------------------------------------------
  "hyd-mech": [
    {
      modelLabel: "S-Series (S-20, S-20A, S-23A) — horizontal pivot",
      modes: [
        {
          symptom:
            "Blade drifts to one side mid-cut and the finished face is no longer square to the vise.",
          commonCauses: [
            "Carbide guide inserts or roller bearings worn past spec on the guide arms.",
            "Guide-arm geometry drifted from factory alignment after a heavy crash.",
            "Hydraulic down-feed pressure running uneven and pushing the blade past its cut rate.",
          ],
          severity: "minor",
        },
        {
          symptom:
            "Hydraulic pressure will not hold during the clamp or down-feed cycle and the cut stalls.",
          commonCauses: [
            "Cylinder seal wear letting fluid bypass under load — common on older S-20 power-vise circuits.",
            "Metering orifice partially blocked by varnish or fluid contamination.",
            "Pump drift after long service hours; we often see this before a full rebuild is needed.",
          ],
        },
        {
          symptom:
            "Blade life has collapsed and operators are changing blades far more often than the cut chart predicts.",
          commonCauses: [
            "Blade tension out of calibration on the tension gauge — typical after a wheel or arbor service.",
            "Coolant mix ratio drifted from spec or nozzle position knocked off the cut zone.",
            "Tracking arm misaligned, walking the blade on the wheel and fatiguing the back edge.",
          ],
        },
        {
          symptom:
            "Blade-break detection or limit-switch fault trips the saw mid-cycle and the panel will not reset.",
          commonCauses: [
            "Prox sensor drifted out of detection range or wiring loosened at the head.",
            "Contactor or motor starter aging — we see this regularly across our authorized-dealer service work.",
            "PLC input losing continuity from vibration on a high-cycle production line.",
          ],
          severity: "major",
        },
      ],
    },
    {
      modelLabel: "DM-Series (DM-10, DM-12) — dual-mitre",
      modes: [
        {
          symptom:
            "Mitre angle does not return to a true zero between cuts and downstream tolerances drift over a shift.",
          commonCauses: [
            "Pivot bearings worn or shimming out of spec after years of high-cycle mitre work.",
            "Hydraulic positioning circuit creeping — typical on DM units when seals age.",
            "Angle-reference sensor drifted from its calibrated zero.",
          ],
        },
        {
          symptom:
            "Vise will not square clamp on structural sections and the workpiece shifts during the cut.",
          commonCauses: [
            "Power-vise cylinder leak-by reducing clamp force at the jaw.",
            "Jaw faces worn smooth, common in shops cutting heavy structural tubing.",
            "Hydraulic clamp pressure setting out of spec on the pressure regulator.",
          ],
        },
        {
          symptom:
            "Blade-tracking adjustment will not hold setting and the blade walks the wheel within a few cycles.",
          commonCauses: [
            "Tracking-arm linkage worn or fastener torque relaxed over service hours.",
            "Wheel alignment off relative to the guide-arm path.",
            "Blade tension running below spec, letting the back edge wander.",
          ],
          severity: "minor",
        },
      ],
    },
    {
      modelLabel: "V-Series (V-18, V-25) — vertical",
      modes: [
        {
          symptom:
            "Vertical head will not return to home position and the cycle hangs at the end of a cut.",
          commonCauses: [
            "Limit-switch fault or prox-sensor drift on the return circuit.",
            "Hydraulic return pressure low after seal wear in the lift cylinder.",
            "PLC input losing continuity from cable wear on the head harness.",
          ],
          severity: "major",
        },
        {
          symptom:
            "Blade tracking drifts after warm-up and the cut goes from square to off-axis as the saw runs.",
          commonCauses: [
            "Guide-bearing wear opening up clearance once the bearings reach operating temperature.",
            "Wheel-alignment shift after a blade change without re-verifying the tracking path.",
            "Tension loss on the blade-tension cylinder, common after a long run on heavy sections.",
          ],
        },
        {
          symptom:
            "Coolant flow weak or intermittent and blade-tooth life is well below the cut chart.",
          commonCauses: [
            "Coolant pump aging and losing prime under load.",
            "Nozzle position knocked off the cut zone or partially clogged with fines.",
            "Mix ratio drifted from spec — typical when sumps go too long between drain-and-recharge.",
          ],
        },
      ],
    },
    {
      modelLabel: "M-Series (M-16A, M-20A) — manual",
      modes: [
        {
          symptom:
            "Manual down-feed feels uneven or grabs through the cut and operators are over-feeding to compensate.",
          commonCauses: [
            "Down-feed metering valve fouled or sticking after fluid contamination.",
            "Counterbalance spring or hydraulic damper out of tune on older M-16A units.",
            "Guide-bearing wear adding drag through the cut path.",
          ],
          severity: "minor",
        },
        {
          symptom:
            "Blade tension reads in spec on the gauge but the cut drifts under load and the back of the blade scores.",
          commonCauses: [
            "Tension gauge itself out of calibration — typical on older M-Series units that have never been verified.",
            "Wheel crown worn flat, changing the effective tension across the blade.",
            "Blade-guide arms set too far apart for the section being cut.",
          ],
        },
        {
          symptom:
            "Vise will not hold clamp on smaller round stock and the workpiece spins during the cut.",
          commonCauses: [
            "Jaw faces worn or the V-block insert missing.",
            "Hydraulic clamp circuit losing pressure — common on aging M-Series power-vise units.",
            "Operator clamp-force setting below what the section needs.",
          ],
        },
      ],
    },
    {
      modelLabel: "H-Series (H-14A, H-18A, H-22A, H-26/44) — production",
      modes: [
        {
          symptom:
            "Production-line cycle time has crept up over a quarter and operators report the saw feels sluggish.",
          commonCauses: [
            "Drive belt tension slipping over service hours, reducing effective cut speed.",
            "Hydraulic pump wear cutting available flow to the down-feed circuit.",
            "Coolant degradation forcing the operator to dial back the feed rate to protect blade life.",
          ],
        },
        {
          symptom:
            "Chip-conveyor jams or chip brush stops sweeping and chips ride the blade back into the cut.",
          commonCauses: [
            "Chip-brush bristles worn down past contact with the blade.",
            "Conveyor drive motor or gearbox failing on high-volume H-22A and H-26/44 production lines.",
            "Coolant flow not flushing the cut zone — nozzle position or pump output dropped.",
          ],
          severity: "minor",
        },
        {
          symptom:
            "Fault code or panel lockout on the production controller and the line stops mid-shift.",
          commonCauses: [
            "Contactor or motor starter aging out — high-cycle production hours wear these first.",
            "Blade-break detection or limit-switch wiring loosened from vibration on the head.",
            "PLC input or sensor drift; we read the code, scope the circuit, and trace to root cause.",
          ],
          severity: "major",
        },
        {
          symptom:
            "Head squareness has drifted and the finished face is out of tolerance on long structural cuts.",
          commonCauses: [
            "Head-to-vise relationship shifted after a heavy crash.",
            "Guide-arm geometry out of factory alignment.",
            "Pivot or rail wear on high-cycle H-Series production lines.",
          ],
        },
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // MARVEL — restructured from existing commonIssues array. Independent shop.
  // -------------------------------------------------------------------------
  marvel: [
    {
      modelLabel: "Series 8 (Mark II, III, IV) — vertical tilt-frame",
      modes: [
        {
          symptom:
            "Feed worm gear failing and the cut starts drifting with unpredictable feed rate across the shift.",
          commonCauses: [
            "Worm and wheel running dry as lubrication thins or contaminates with chips.",
            "Worm-wheel wear from running past the recommended feed-rate window.",
            "Lubrication path partially blocked by chip ingress on older Mark II/III units.",
          ],
          severity: "major",
        },
        {
          symptom:
            "Blade tracking off and the blade walks the wheel as the cut goes out of square.",
          commonCauses: [
            "Guide-bearing wear opening clearance on the tracking arm.",
            "Tracking arm misaligned after a service event or blade change.",
            "Blade tension drifted below spec, letting the back edge wander.",
          ],
          severity: "minor",
        },
        {
          symptom:
            "Cut quality collapses on tough material like Inconel and blade life drops well below expectation.",
          commonCauses: [
            "Coolant flow weak from pump wear or partial nozzle clog.",
            "Coolant mix ratio drifted from spec for the alloy being cut.",
            "Feed rate pushed past the cut-speed window for the section and material.",
          ],
        },
      ],
    },
    {
      modelLabel: "Series 81 & Spartan — production vertical",
      modes: [
        {
          symptom:
            "Hydraulic down-feed creeps off setting and the saw will not hold a consistent feed pressure.",
          commonCauses: [
            "Pump drift after long service hours on production-volume Series 81 units.",
            "Cylinder seal wear letting fluid bypass under load.",
            "Metering orifice partially clogged by varnish or contamination.",
          ],
        },
        {
          symptom:
            "Spartan vise will not square clamp on structural sections and the workpiece shifts mid-cut.",
          commonCauses: [
            "Jaw faces worn smooth from heavy structural work.",
            "Power-vise cylinder leak-by dropping clamp force.",
            "Clamp pressure setting below what the section requires.",
          ],
        },
        {
          symptom:
            "Drive belt slip and the cut feels under-powered on the Series 81 production line.",
          commonCauses: [
            "Belt tension relaxed over service hours.",
            "Pulley glazing reducing effective grip.",
            "Motor bearings adding load; we hear this before it becomes a hard failure.",
          ],
          severity: "minor",
        },
      ],
    },
    {
      modelLabel: "Premium 15A & Series 15A9 — heavy-section vertical",
      modes: [
        {
          symptom:
            "Hydraulic down-feed creeping out of tune and the cut rate goes inconsistent through a long structural pass.",
          commonCauses: [
            "Pump drift over service hours on heavy-section Premium 15A units.",
            "Cylinder seal wear on the down-feed circuit.",
            "Metering orifice partially clogged by chip-laden coolant ingress.",
          ],
        },
        {
          symptom:
            "Coolant flow weak or mix wrong and blade life on heavy structural drops noticeably.",
          commonCauses: [
            "Coolant pump aging and losing prime under load.",
            "Nozzle worn or knocked off the cut zone.",
            "Mix ratio drifted from spec — typical when sumps go too long between recharges.",
          ],
        },
      ],
    },
    {
      modelLabel: "Legacy Marvel verticals",
      modes: [
        {
          symptom:
            "Older Marvel vertical drifts on tracking and blade life is shorter than newer units in the same shop.",
          commonCauses: [
            "Guide-bearing wear; we often see this on units with high lifetime hours.",
            "Wheel crown worn flat, changing effective tension across the blade.",
            "Tension gauge itself out of calibration on legacy units that have never been verified.",
          ],
        },
        {
          symptom:
            "Drive belt or pulley wear and the cut speed is no longer keeping up with shop expectation.",
          commonCauses: [
            "Belts glazed or relaxed past their service life.",
            "Pulleys grooved from years of contact.",
            "Motor bearings adding drag, common on legacy Marvel verticals.",
          ],
          severity: "minor",
        },
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // HE&M — restructured from existing commonIssues. Independent shop.
  // -------------------------------------------------------------------------
  hem: [
    {
      modelLabel: "H-Series (H90A, H105A, H130A) — horizontal pivot",
      modes: [
        {
          symptom:
            "Hydraulic down-feed walks out of tune and the vise pressure drops mid-cycle on the H-Series pivots.",
          commonCauses: [
            "Cylinder seal wear letting fluid bypass under load.",
            "Metering orifice partially blocked by fluid contamination.",
            "Pump drift after long service hours on production-volume units.",
          ],
        },
        {
          symptom:
            "Cut goes out of square on long structural pieces and downstream tolerances drift over a shift.",
          commonCauses: [
            "Head-to-vise relationship shifted after a heavy crash.",
            "Guide-arm geometry out of alignment.",
            "Blade tension drifted from spec on the tension gauge.",
          ],
        },
        {
          symptom:
            "Drive belt slipping and the cut feels under-powered on the H-Series pivot drive.",
          commonCauses: [
            "Belt tension relaxed over service hours.",
            "Pulley glazing reducing effective grip.",
            "Motor bearings adding load on aging units.",
          ],
          severity: "minor",
        },
      ],
    },
    {
      modelLabel: "V-Series (V100LA-3, V125LM, V140LA) — vertical tilt-frame",
      modes: [
        {
          symptom:
            "Cutting crooked on the V100/V125/V140 verticals and the operator is compensating with manual offsets.",
          commonCauses: [
            "Guide-bearing wear on the tracking arm.",
            "Blade tension loss reducing back-edge stability.",
            "Tracking arm out of spec after a blade change or service event.",
          ],
        },
        {
          symptom:
            "Tilt-frame angle will not return to a true zero between cuts and mitre tolerances drift.",
          commonCauses: [
            "Pivot bearings worn after years of mitre cycles.",
            "Angle-reference sensor drifted from calibrated zero.",
            "Hydraulic positioning circuit creeping on aging V-Series units.",
          ],
        },
      ],
    },
    {
      modelLabel: "Saber mitre saws (Saber 360, Saber 600)",
      modes: [
        {
          symptom:
            "Mitre cut accuracy drifts on the Saber 360/600 and operators report the angle no longer holds true.",
          commonCauses: [
            "Pivot or rotation-table wear after high-cycle mitre work.",
            "Hydraulic positioning circuit creeping out of tune.",
            "Angle-reference calibration drifted from factory zero.",
          ],
        },
        {
          symptom:
            "Vise clamp force inconsistent on structural sections and the workpiece shifts during angled cuts.",
          commonCauses: [
            "Cylinder leak-by dropping clamp force at the jaw.",
            "Jaw-face wear from heavy structural mitre work.",
            "Clamp-pressure regulator out of spec.",
          ],
        },
      ],
    },
    {
      modelLabel: "NG-Series (NG120XL, NG160) — production lines",
      modes: [
        {
          symptom:
            "Electronic control fault throws on the NG-Series panel and the production line stops mid-shift.",
          commonCauses: [
            "Contactors aging out under production-cycle volume.",
            "Sensor drift on prox or position feedback inputs.",
            "Wiring loosened from vibration on the head assembly.",
          ],
          severity: "major",
        },
        {
          symptom:
            "Cycle time has crept up over a quarter and the NG production line is missing throughput targets.",
          commonCauses: [
            "Hydraulic pump wear cutting available flow on the down-feed.",
            "Drive belt tension slipping over service hours.",
            "Coolant degradation forcing the operator to dial back the feed rate.",
          ],
        },
      ],
    },
    {
      modelLabel: "DC-Series dual-column & Legacy HE&M",
      modes: [
        {
          symptom:
            "Dual-column head tracking drifts on the DC-Series and the cut squareness goes off on heavy sections.",
          commonCauses: [
            "Column-rail wear or alignment shift after a crash.",
            "Hydraulic balance between columns out of spec.",
            "Guide-arm geometry drifted from factory setting.",
          ],
        },
        {
          symptom:
            "Older HE&M machine has slow cycle and blade life is well below newer units in the same fleet.",
          commonCauses: [
            "Drive belts glazed or relaxed past service life.",
            "Pulleys grooved from years of contact.",
            "Tension gauge or guide arms out of calibration on legacy HE&M units.",
          ],
          severity: "minor",
        },
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // AMADA — restructured from existing commonIssues. Independent shop.
  // -------------------------------------------------------------------------
  amada: [
    {
      modelLabel: "HFA-Series (HFA-250, HFA-400, HFA-700, HFA-1000W) — horizontal automatic",
      modes: [
        {
          symptom:
            "HFA hydraulic down-feed and vise pressure walks out of tune over a shift on HFA-400/700/1000 units.",
          commonCauses: [
            "Pump drift after long service hours on production-volume HFA lines.",
            "Cylinder seal wear letting fluid bypass under load.",
            "Metering orifice partially blocked by varnish or contamination.",
          ],
        },
        {
          symptom:
            "Control board throws a fault and the HFA panel will not reset to run.",
          commonCauses: [
            "Contactors aging out under production-cycle volume.",
            "Prox sensors drifted out of detection range.",
            "Wiring loosened from vibration on the head harness.",
          ],
          severity: "major",
        },
        {
          symptom:
            "NC program parameters wiped after a power event or battery loss on the automatic HFA control.",
          commonCauses: [
            "Backup battery on the NC control reached end of life.",
            "Voltage spike or sag on the shop feed during a power event.",
            "Parameter set never archived to external media after the last service.",
          ],
          severity: "major",
        },
      ],
    },
    {
      modelLabel: "HA-Series (HA-250, HA-400) — semi-automatic horizontal",
      modes: [
        {
          symptom:
            "HA-250 coolant pump weak or intermittent and blade life drops on production cuts.",
          commonCauses: [
            "Pump impeller wear after long service hours.",
            "Coolant mix ratio drifted from spec for the material.",
            "Nozzle wear or partial clog at the cut zone.",
          ],
        },
        {
          symptom:
            "Blade tracking drifts on the HA-Series horizontal and the cut goes out of square.",
          commonCauses: [
            "Guide-bearing wear opening clearance on the tracking arm.",
            "Blade tension drifted from spec.",
            "Tracking-arm alignment shifted after a blade change.",
          ],
          severity: "minor",
        },
      ],
    },
    {
      modelLabel: "PCSAW — horizontal cold-saw lines",
      modes: [
        {
          symptom:
            "PCSAW carbide cut quality degrades and tooth life drops below shop expectation.",
          commonCauses: [
            "Coolant or mist degradation — pump wear or nozzle clogging.",
            "Arbor or spindle wear putting the blade out of true.",
            "Feed rate pushed past the cut-speed window for the section and material.",
          ],
        },
        {
          symptom:
            "Control panel fault on the PCSAW line and the cycle stops mid-shift.",
          commonCauses: [
            "Contactors aging under high-cycle production volume.",
            "Sensor or PLC input drift after long service hours.",
            "Wiring continuity loss from harness vibration.",
          ],
          severity: "major",
        },
      ],
    },
    {
      modelLabel: "Amada verticals & Legacy Amada",
      modes: [
        {
          symptom:
            "Older Amada vertical or legacy unit cuts slow and blade life is shorter than newer fleet units.",
          commonCauses: [
            "Guide-bearing wear from high lifetime hours.",
            "Drive belts glazed or relaxed past service life.",
            "Tension gauge out of calibration on legacy units that have never been verified.",
          ],
          severity: "minor",
        },
        {
          symptom:
            "Vertical head will not return to home and the cycle hangs at the end of a cut.",
          commonCauses: [
            "Limit-switch or prox-sensor drift on the return circuit.",
            "Hydraulic return pressure low after seal wear.",
            "PLC input losing continuity from cable wear.",
          ],
        },
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // BEHRINGER — restructured from existing commonIssues + faultCodeNotes.
  // Independent shop.
  // -------------------------------------------------------------------------
  behringer: [
    {
      modelLabel: "HBP-Series (HBP-310, HBP-410, HBP-420, HBP-530A) — horizontal production",
      modes: [
        {
          symptom:
            "HBP clamping circuit develops pressure drift or intermittent engagement and the vise will not hold force.",
          commonCauses: [
            "Cylinder seal wear letting fluid bypass under load.",
            "Hydraulic fluid contaminated — common after long service intervals.",
            "Valve sticking on the clamp circuit; we meter-test and verify clamp force.",
          ],
        },
        {
          symptom:
            "Cycle time has crept up on the HBP production line and operators report the saw feels sluggish.",
          commonCauses: [
            "Hydraulic pump wear cutting available flow on the down-feed.",
            "Drive belt tension relaxed over production-volume service hours.",
            "Coolant degradation forcing the operator to dial back the feed rate.",
          ],
        },
        {
          symptom:
            "Cut goes out of square on heavy structural sections on the HBP-530A and downstream tolerances drift.",
          commonCauses: [
            "Head-to-vise relationship shifted after a heavy crash.",
            "Guide-arm geometry out of factory alignment.",
            "Blade tension drifted from spec on the tension gauge.",
          ],
        },
      ],
    },
    {
      modelLabel: "HBE-Series (HBE-261A, HBE-320) — manual / semi-automatic",
      modes: [
        {
          symptom:
            "HBE blade tracking drifts and the cut goes out of square as blade life collapses.",
          commonCauses: [
            "Guide-bearing wear on the tracking arm.",
            "Blade tension loss reducing back-edge stability.",
            "Tracking arm out of spec after a service event.",
          ],
          severity: "minor",
        },
        {
          symptom:
            "Manual down-feed feels uneven on the HBE-261A and operators are over-feeding to compensate.",
          commonCauses: [
            "Down-feed metering valve fouled or sticking after fluid contamination.",
            "Guide-bearing wear adding drag through the cut path.",
            "Counterbalance circuit out of tune.",
          ],
        },
      ],
    },
    {
      modelLabel: "HBM mitre saws & LPS fully-automatic lines",
      modes: [
        {
          symptom:
            "Control panel fault code displays on the HBM or LPS panel and the production cycle stops mid-shift.",
          commonCauses: [
            "Sensors drifted out of detection range on the production line.",
            "Contactors aging under high-cycle volume.",
            "PLC input losing continuity from harness vibration; we read the code and trace to root cause.",
          ],
          severity: "major",
        },
        {
          symptom:
            "LPS automatic line cycle time has crept up over a quarter and the line is missing throughput targets.",
          commonCauses: [
            "Hydraulic pump wear on the down-feed circuit.",
            "Coolant degradation forcing reduced feed rate.",
            "Drive belt tension slipping over service hours.",
          ],
        },
      ],
    },
    {
      modelLabel: "HCS carbide circular cold saws & Legacy Behringer",
      modes: [
        {
          symptom:
            "HCS carbide tooth life drops well below expectation and coolant performance degrades quickly.",
          commonCauses: [
            "Coolant pump wear reducing flow to the cut zone.",
            "Nozzle clogging on the high-velocity coolant lines.",
            "Mix ratio drifted from spec — carbide cold saws are punishing on coolant.",
          ],
        },
        {
          symptom:
            "Carbide blade alignment drifts on the HCS and cut precision goes from microns to scrap.",
          commonCauses: [
            "Arbor wear after long service hours.",
            "Clamp-face contamination keeping the blade off true.",
            "Spindle or bearing wear on aging HCS units.",
          ],
          severity: "major",
        },
        {
          symptom:
            "Older Behringer machine cuts slow and blade life is shorter than newer fleet units.",
          commonCauses: [
            "Guide-bearing wear from high lifetime hours.",
            "Drive belts glazed or relaxed past service life.",
            "Tension gauge out of calibration on legacy units.",
          ],
          severity: "minor",
        },
      ],
    },
  ],

  // -------------------------------------------------------------------------
  // TSUNE — restructured from existing commonIssues + legacyNotes.
  // Independent shop.
  // -------------------------------------------------------------------------
  tsune: [
    {
      modelLabel: "FA-Series carbide circulars (FA-250, FA-300A, FA-500A)",
      modes: [
        {
          symptom:
            "Carbide blade alignment off on the FA-Series and the cut goes from precision to scrap quickly.",
          commonCauses: [
            "Arbor wear after long service hours on the carbide spindle.",
            "Clamp-face contamination keeping the blade off true.",
            "Spindle bent or bearing wear on high-cycle FA units.",
          ],
          severity: "major",
        },
        {
          symptom:
            "Hydraulic vise pressure drifts on the FA-300A/500A and clamp force goes inconsistent on positioning cycles.",
          commonCauses: [
            "Seal wear in the clamp cylinder.",
            "Hydraulic fluid contaminated after long service interval.",
            "Valve sticking on the clamp circuit; we meter-test and reset clamp force.",
          ],
        },
        {
          symptom:
            "Coolant or mist degradation on the FA carbide cuts and tooth life drops dramatically over a shift.",
          commonCauses: [
            "Pump wear reducing flow to the high-velocity nozzles.",
            "Nozzle clogging at the cut zone.",
            "Mist ratio drifted from spec — Tsune carbide cuts are punishing on coolant.",
          ],
        },
      ],
    },
    {
      modelLabel: "FMB-Series band saws",
      modes: [
        {
          symptom:
            "FMB band tracking drifts and the cut goes out of square on extended production runs.",
          commonCauses: [
            "Guide-bearing wear opening clearance on the tracking arm.",
            "Blade tension loss reducing back-edge stability.",
            "Wheel crown worn flat, changing effective tension across the blade.",
          ],
          severity: "minor",
        },
        {
          symptom:
            "FMB hydraulic down-feed creeps off setting and the cut rate goes inconsistent through a long cycle.",
          commonCauses: [
            "Pump drift after long service hours.",
            "Cylinder seal wear on the down-feed circuit.",
            "Metering orifice partially blocked by fluid contamination.",
          ],
        },
      ],
    },
    {
      modelLabel: "MCS & NHC fully-automatic systems",
      modes: [
        {
          symptom:
            "Servo positioning fault on the MCS or NHC automation and the cycle hangs with a panel code.",
          commonCauses: [
            "Servo drives lost tuning after a long run or power event.",
            "Encoder drift on the position feedback loop.",
            "Cable continuity loss on the servo harness; we read the fault and scope the circuit.",
          ],
          severity: "major",
        },
        {
          symptom:
            "Cycle time has crept up on the automation and the line is missing throughput targets.",
          commonCauses: [
            "Hydraulic pump wear on the down-feed.",
            "Coolant degradation forcing reduced feed rate.",
            "Servo-tuning drift after long service hours.",
          ],
        },
      ],
    },
    {
      modelLabel: "Legacy Tsune machinery",
      modes: [
        {
          symptom:
            "Older Tsune FA carbide circular or FMB band cuts slow and tooth life is below newer fleet units.",
          commonCauses: [
            "Guide-bearing or spindle-bearing wear from high lifetime hours.",
            "Drive belts glazed or relaxed past service life.",
            "Coolant system aged out — pump, lines, and nozzles all due for service.",
          ],
          severity: "minor",
        },
        {
          symptom:
            "OEM parts on legacy Tsune units are no longer stocked and the saw is down waiting on parts.",
          commonCauses: [
            "Bearings, seals, and hoses sourceable as dimensional equivalents from a parts network.",
            "Electricals — contactors, relays, sensors — typically available from current suppliers.",
            "Documented substitutions keep the service records clean for downstream resale or audit.",
          ],
        },
      ],
    },
  ],
};
