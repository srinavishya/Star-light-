
/*
  STAR LIGHT – CLASS 12 CHEMISTRY
  Chapter content for Volumes 1 and 2.

  Each chapter contains:
  - 6 Book-back Practice questions
  - 6 Important Questions
  - 6 Worked Examples
  - Formula / concept sheet
*/

const chapterTopics = [
  {
    number: 1,
    title: "Metallurgy",
    topics: [
      ["What is a mineral?", "A mineral is a naturally occurring substance containing a metal or its compounds. A mineral may or may not be suitable for economical extraction."],
      ["What is an ore?", "An ore is a mineral containing a sufficiently high percentage of a metal from which the metal can be extracted conveniently and economically."],
      ["What is concentration of ore?", "Concentration is the process of removing unwanted earthy impurities called gangue from an ore before extraction."],
      ["What is roasting?", "Roasting is heating a sulphide ore strongly in excess air to convert it into its oxide, releasing sulphur dioxide."],
      ["What is calcination?", "Calcination is heating an ore in the absence or limited supply of air. It removes moisture and volatile impurities and may convert carbonates into oxides."],
      ["What is electrolytic refining?", "Electrolytic refining purifies a metal by electrolysis. The impure metal is the anode, pure metal is the cathode and a suitable electrolyte is used."]
    ],
    formulas: [
      ["Ellingham principle", "ΔG = ΔH − TΔS", "The Gibbs free energy change helps predict whether a reduction reaction is thermodynamically feasible."],
      ["Reduction condition", "ΔG < 0", "A negative Gibbs free energy change indicates a thermodynamically spontaneous reaction under the stated conditions."],
      ["Faraday's law", "m = ZIt", "The mass deposited is proportional to the quantity of electricity passed through the electrolyte."]
    ]
  },
  {
    number: 2,
    title: "p-Block Elements – I",
    topics: [
      ["What are p-block elements?", "p-block elements are elements in which the differentiating electron enters a p-orbital of the outermost shell. They belong to Groups 13 to 18."],
      ["What is inert pair effect?", "The inert pair effect is the tendency of the outermost ns² electron pair to remain non-bonding in heavier p-block elements."],
      ["Why does boron show anomalous behaviour?", "Boron differs from the other members of Group 13 because of its small size, high ionisation enthalpy and absence of d-orbitals."],
      ["What is electron-deficient bonding?", "Electron-deficient bonding occurs when a molecule has fewer electrons than required for ordinary two-centre, two-electron bonds. Diborane contains three-centre, two-electron bonds."],
      ["What is the oxidation state of aluminium in AlCl₃?", "Let the oxidation state of aluminium be x. Since chlorine has oxidation state −1, x + 3(−1) = 0. Therefore x = +3."],
      ["Why is boron a non-metal?", "Boron has a relatively small atomic size and high ionisation enthalpy. It generally forms covalent compounds rather than losing electrons to form simple positive ions."]
    ],
    formulas: [
      ["General valence configuration", "ns² np¹", "This is the general outer electronic configuration of Group 13 elements."],
      ["Boric acid", "H₃BO₃", "Boric acid is a weak monobasic Lewis acid."],
      ["Diborane", "B₂H₆", "Diborane is an electron-deficient compound containing bridging hydrogen bonds."]
    ]
  },
  {
    number: 3,
    title: "p-Block Elements – II",
    topics: [
      ["What is allotropy?", "Allotropy is the existence of an element in two or more different structural forms in the same physical state."],
      ["What is catenation?", "Catenation is the ability of an element to form covalent bonds with itself, producing chains or rings. Carbon shows extensive catenation."],
      ["Why is nitrogen gas relatively unreactive?", "Nitrogen exists as N₂ with a strong triple bond. Its high bond dissociation energy makes it relatively unreactive at room temperature."],
      ["What is the shape of ammonia?", "Ammonia has a trigonal pyramidal shape. Nitrogen has three bond pairs and one lone pair."],
      ["What is the oxidation state of sulphur in H₂SO₄?", "Let sulphur be x. Then 2(+1) + x + 4(−2) = 0. Therefore x = +6."],
      ["What is the structure of ozone?", "Ozone, O₃, has a bent molecular shape. Its bonding is explained using resonance between equivalent structures."]
    ],
    formulas: [
      ["Ammonia", "NH₃", "Ammonia has a trigonal pyramidal molecular geometry."],
      ["Nitric acid", "HNO₃", "Nitric acid is a strong acid and a powerful oxidising agent."],
      ["Sulphuric acid", "H₂SO₄", "Sulphuric acid is dibasic and acts as an oxidising and dehydrating agent."]
    ]
  },
  {
    number: 4,
    title: "Transition and Inner Transition Elements",
    topics: [
      ["What are transition elements?", "Transition elements are elements whose atoms or common ions have partially filled d-orbitals."],
      ["Why do transition elements show variable oxidation states?", "The energies of the ns and (n−1)d orbitals are close, so electrons from both can participate in bonding."],
      ["Why are many transition metal compounds coloured?", "Many transition metal ions have partially filled d-orbitals. Absorption of visible light can cause d–d electronic transitions."],
      ["What is lanthanoid contraction?", "Lanthanoid contraction is the gradual decrease in the size of lanthanoid atoms and ions with increasing atomic number."],
      ["Why do transition metals act as catalysts?", "They can show variable oxidation states and provide surfaces or intermediate compounds that offer alternative reaction pathways."],
      ["What is the difference between lanthanoids and actinoids?", "Lanthanoids involve filling of 4f orbitals, whereas actinoids involve filling of 5f orbitals. Many actinoids are radioactive."]
    ],
    formulas: [
      ["Magnetic moment", "μ = √[n(n + 2)] BM", "The spin-only formula estimates magnetic moment, where n is the number of unpaired electrons."],
      ["d-block configuration", "(n−1)d¹–¹⁰ ns⁰–²", "This represents the general valence electronic configuration of transition elements."],
      ["Oxidation state", "Sum of oxidation numbers = ionic charge", "Use this rule to calculate an unknown oxidation state in a compound or ion."]
    ]
  },
  {
    number: 5,
    title: "Coordination Chemistry",
    topics: [
      ["What is a coordination compound?", "A coordination compound contains a central metal atom or ion bonded to surrounding ions or molecules called ligands."],
      ["What is a ligand?", "A ligand is an ion or molecule that donates one or more electron pairs to a central metal atom or ion."],
      ["What is coordination number?", "Coordination number is the number of donor atoms directly bonded to the central metal ion."],
      ["What is chelation?", "Chelation occurs when a multidentate ligand bonds to a central metal ion through two or more donor atoms, forming a ring."],
      ["What is geometrical isomerism?", "Geometrical isomerism occurs when compounds have the same bonds but different spatial arrangements of ligands, such as cis and trans forms."],
      ["What is the oxidation state of cobalt in [Co(NH₃)₆]Cl₃?", "The complex ion has charge +3. Ammonia is neutral, so the oxidation state of cobalt is +3."]
    ],
    formulas: [
      ["Coordination number", "Number of donor atoms attached to the central metal", "Count the donor atoms directly bonded to the central metal."],
      ["Oxidation state", "x + sum of ligand charges = complex charge", "Use the charges of the ligands and the overall complex ion to find x."],
      ["Effective atomic number", "EAN = Z − oxidation state + electrons donated by ligands", "This is a historical method used to discuss electron counts in coordination complexes."]
    ]
  },
  {
    number: 6,
    title: "Solid State",
    topics: [
      ["What is a crystalline solid?", "A crystalline solid has a regular, repeating arrangement of particles and a definite geometrical structure."],
      ["What is a unit cell?", "A unit cell is the smallest repeating three-dimensional portion of a crystal lattice that represents the complete crystal structure."],
      ["How many atoms are present in a body-centred cubic unit cell?", "A body-centred cubic unit cell has eight corner contributions of 1/8 each and one body-centred atom. Total = 8(1/8) + 1 = 2 atoms."],
      ["What is a Schottky defect?", "A Schottky defect is a vacancy defect in which equal numbers of cations and anions are missing from their normal lattice positions."],
      ["What is a Frenkel defect?", "A Frenkel defect occurs when a smaller ion leaves its normal lattice position and occupies an interstitial site."],
      ["What is packing efficiency?", "Packing efficiency is the percentage of the total volume of a unit cell occupied by its constituent particles."]
    ],
    formulas: [
      ["Density of a unit cell", "ρ = ZM / (a³Nₐ)", "Z is the number of particles per unit cell, M is molar mass, a is edge length and Nₐ is Avogadro's constant."],
      ["Simple cubic", "Z = 1", "A simple cubic unit cell contains one effective particle."],
      ["Body-centred cubic", "Z = 2", "A body-centred cubic unit cell contains two effective particles."],
      ["Face-centred cubic", "Z = 4", "A face-centred cubic unit cell contains four effective particles."]
    ]
  },
  {
    number: 7,
    title: "Chemical Kinetics",
    topics: [
      ["What is the rate of a chemical reaction?", "The rate of reaction is the change in concentration of a reactant or product per unit time."],
      ["What is order of reaction?", "The order of a reaction is the sum of the powers of concentration terms in its experimentally determined rate law."],
      ["What is molecularity?", "Molecularity is the number of reacting species taking part in a single elementary reaction step."],
      ["What is activation energy?", "Activation energy is the minimum energy that reacting particles must possess for an effective collision leading to reaction."],
      ["What is half-life?", "Half-life is the time required for the concentration of a reactant to become half its initial value."],
      ["How does a catalyst affect activation energy?", "A catalyst provides an alternative reaction pathway with lower activation energy. It increases the reaction rate without being consumed overall."]
    ],
    formulas: [
      ["Rate of reaction", "Rate = −Δ[R]/Δt", "The negative sign is used for a reactant because its concentration decreases with time."],
      ["First-order rate constant", "k = (2.303/t) log(a/(a−x))", "This integrated rate equation applies to a first-order reaction."],
      ["First-order half-life", "t₁/₂ = 0.693/k", "The half-life of a first-order reaction is independent of initial concentration."],
      ["Arrhenius equation", "k = A e^(−Ea/RT)", "This equation relates the rate constant to temperature and activation energy."]
    ]
  },
  {
    number: 8,
    title: "Ionic Equilibrium",
    topics: [
      ["What is ionic equilibrium?", "Ionic equilibrium is the dynamic equilibrium established between undissociated molecules and their ions in an electrolyte solution."],
      ["What is pH?", "pH is the negative logarithm to base 10 of the hydrogen ion concentration or activity in a solution."],
      ["What is a buffer solution?", "A buffer solution resists significant changes in pH when small quantities of acid or base are added."],
      ["What is the common ion effect?", "The common ion effect is the suppression of ionisation of a weak electrolyte by adding a strong electrolyte containing a common ion."],
      ["What is solubility product?", "The solubility product is the equilibrium constant for the dissolution of a sparingly soluble ionic solid in a saturated solution."],
      ["What is the relation between Ka and pKa?", "pKa is the negative logarithm of the acid dissociation constant Ka. A smaller pKa generally indicates a stronger acid."]
    ],
    formulas: [
      ["pH", "pH = −log[H⁺]", "Calculate pH using the hydrogen ion concentration in mol L⁻¹."],
      ["pOH", "pOH = −log[OH⁻]", "Calculate pOH using the hydroxide ion concentration."],
      ["At 25°C", "pH + pOH = 14", "This relation applies to dilute aqueous solutions at 25°C."],
      ["Acid dissociation", "Ka = [H⁺][A⁻]/[HA]", "This expression is for a weak monoprotic acid HA in solution."]
    ]
  },
  {
    number: 9,
    title: "Electro Chemistry",
    topics: [
      ["What is an electrochemical cell?", "An electrochemical cell is a device in which a redox reaction converts chemical energy into electrical energy or electrical energy into chemical change."],
      ["What is oxidation?", "Oxidation is the loss of electrons or an increase in oxidation number."],
      ["What is reduction?", "Reduction is the gain of electrons or a decrease in oxidation number."],
      ["What is electrode potential?", "Electrode potential is the potential difference developed between an electrode and the electrolyte containing its ions under specified conditions."],
      ["What is a salt bridge?", "A salt bridge completes the electrical circuit and maintains electrical neutrality by allowing ions to migrate between half-cells."],
      ["What is electrolysis?", "Electrolysis is the process in which electrical energy drives a non-spontaneous chemical reaction."]
    ],
    formulas: [
      ["Cell potential", "E°cell = E°cathode − E°anode", "Use standard reduction potentials to calculate the standard cell potential."],
      ["Gibbs energy", "ΔG° = −nFE°cell", "n is the number of electrons transferred and F is the Faraday constant."],
      ["Nernst equation at 298 K", "E = E° − (0.0591/n) log Q", "This equation gives electrode or cell potential under non-standard conditions."],
      ["Faraday's law", "m = MIt/(nF)", "This expression calculates the mass deposited during electrolysis."]
    ]
  },
  {
    number: 10,
    title: "Surface Chemistry",
    topics: [
      ["What is adsorption?", "Adsorption is the accumulation of molecules or ions of one substance on the surface of another substance."],
      ["What is absorption?", "Absorption is the uniform distribution of a substance throughout the bulk of another substance."],
      ["What is a colloid?", "A colloid is a heterogeneous system in which particles of one substance are dispersed in another medium, with particle sizes generally between those of true solutions and suspensions."],
      ["What is the Tyndall effect?", "The Tyndall effect is the scattering of light by colloidal particles, making the path of a light beam visible."],
      ["What is coagulation?", "Coagulation is the process by which colloidal particles aggregate and separate from the dispersion medium."],
      ["What is a catalyst?", "A catalyst changes the rate of a chemical reaction by providing an alternative pathway and is regenerated at the end of the reaction."]
    ],
    formulas: [
      ["Freundlich adsorption isotherm", "x/m = kP^(1/n)", "This empirical relation describes gas adsorption on a solid over a limited pressure range."],
      ["Langmuir isotherm", "θ = KP/(1 + KP)", "θ represents the fraction of surface sites occupied by adsorbate."],
      ["Adsorption", "Adsorption is a surface phenomenon", "The concentration of the adsorbed substance is higher at the surface than in the bulk."]
    ]
  },
  {
    number: 11,
    title: "Hydroxy Compounds and Ethers",
    topics: [
      ["What are alcohols?", "Alcohols are organic compounds containing one or more hydroxyl groups (−OH) attached to saturated carbon atoms."],
      ["What are phenols?", "Phenols are compounds in which a hydroxyl group is directly attached to an aromatic ring."],
      ["What are ethers?", "Ethers are organic compounds containing an oxygen atom bonded to two carbon-containing groups, represented as R−O−R′."],
      ["Why are alcohols more soluble in water than comparable alkanes?", "Alcohol molecules can form hydrogen bonds with water molecules, increasing their solubility."],
      ["What is dehydration of alcohol?", "Dehydration is the removal of water from an alcohol, commonly producing an alkene under suitable acidic conditions."],
      ["How can phenol be distinguished from alcohol?", "Phenol gives a characteristic violet or coloured complex with neutral ferric chloride solution, whereas ordinary alcohols generally do not."]
    ],
    formulas: [
      ["Alcohol functional group", "R−OH", "The hydroxyl group is attached to a saturated carbon atom."],
      ["Phenol", "Ar−OH", "The hydroxyl group is directly attached to an aromatic ring."],
      ["Ether", "R−O−R′", "Oxygen connects two alkyl or aryl groups."],
      ["Dehydration example", "CH₃CH₂OH → CH₂=CH₂ + H₂O", "Ethanol can form ethene by dehydration under suitable conditions."]
    ]
  },
  {
    number: 12,
    title: "Carbonyl Compounds and Carboxylic Acids",
    topics: [
      ["What is a carbonyl group?", "A carbonyl group is the functional group C=O, present in aldehydes, ketones and several other organic compounds."],
      ["What are aldehydes?", "Aldehydes contain the terminal functional group −CHO, in which the carbonyl carbon is bonded to at least one hydrogen atom."],
      ["What are ketones?", "Ketones contain a carbonyl group bonded to two carbon-containing groups, represented as R−CO−R′."],
      ["What are carboxylic acids?", "Carboxylic acids contain the carboxyl functional group −COOH."],
      ["What is nucleophilic addition?", "Nucleophilic addition is a reaction in which a nucleophile attacks the electrophilic carbonyl carbon and adds across the C=O bond."],
      ["How can aldehydes be distinguished from ketones?", "Aldehydes generally give a positive Tollens' test, producing a silver mirror, while ordinary ketones do not."]
    ],
    formulas: [
      ["Aldehyde", "R−CHO", "The carbonyl group is at the end of the carbon chain."],
      ["Ketone", "R−CO−R′", "The carbonyl carbon is attached to two carbon groups."],
      ["Carboxylic acid", "R−COOH", "The carboxyl group contains both carbonyl and hydroxyl parts."],
      ["Oxidation of aldehyde", "R−CHO + [O] → R−COOH", "Aldehydes can be oxidised to carboxylic acids."]
    ]
  },
  {
    number: 13,
    title: "Organic Nitrogen Compounds",
    topics: [
      ["What are amines?", "Amines are organic derivatives of ammonia in which one or more hydrogen atoms are replaced by alkyl or aryl groups."],
      ["What is a primary amine?", "A primary amine has one carbon-containing group attached to nitrogen and is represented as R−NH₂."],
      ["What is the basic nature of amines?", "Amines are generally basic because the nitrogen atom has a lone pair that can accept a proton."],
      ["What is diazotisation?", "Diazotisation is the conversion of a primary aromatic amine into a diazonium salt using nitrous acid at low temperature."],
      ["What is aniline?", "Aniline is an aromatic primary amine with the formula C₆H₅NH₂. Its amino group is directly attached to a benzene ring."],
      ["What is the carbylamine test?", "The carbylamine test is a test for primary amines. A primary amine reacts with chloroform and alcoholic KOH to form an isocyanide with an unpleasant smell."]
    ],
    formulas: [
      ["Primary amine", "R−NH₂", "One hydrogen of ammonia is replaced by an organic group."],
      ["Secondary amine", "R₂NH", "Two hydrogen atoms of ammonia are replaced by organic groups."],
      ["Tertiary amine", "R₃N", "All three hydrogen atoms of ammonia are replaced by organic groups."],
      ["Aniline", "C₆H₅NH₂", "Aniline is the simplest aromatic primary amine."]
    ]
  },
  {
    number: 14,
    title: "Biomolecules",
    topics: [
      ["What are carbohydrates?", "Carbohydrates are polyhydroxy aldehydes or ketones, or substances that yield them on hydrolysis."],
      ["What are monosaccharides?", "Monosaccharides are the simplest carbohydrates and cannot be hydrolysed into smaller carbohydrate units."],
      ["What are proteins?", "Proteins are biological macromolecules made of amino acids linked together by peptide bonds."],
      ["What is a peptide bond?", "A peptide bond is the amide linkage (−CO−NH−) formed between the carboxyl group of one amino acid and the amino group of another."],
      ["What are enzymes?", "Enzymes are biological catalysts, usually proteins, that speed up biochemical reactions with high specificity."],
      ["What are nucleic acids?", "Nucleic acids are polymers of nucleotides. DNA stores hereditary information, while RNA performs several roles in gene expression and protein synthesis."]
    ],
    formulas: [
      ["Glucose", "C₆H₁₂O₆", "Glucose is an important monosaccharide and a major source of energy in living organisms."],
      ["General amino acid", "H₂N−CH(R)−COOH", "A typical amino acid contains an amino group, carboxyl group and variable side chain."],
      ["Peptide linkage", "−CO−NH−", "This bond joins amino acid residues in peptides and proteins."],
      ["Nucleotide", "Nitrogenous base + sugar + phosphate", "A nucleotide is the basic structural unit of nucleic acids."]
    ]
  },
  {
    number: 15,
    title: "Chemistry in Everyday Life",
    topics: [
      ["What are drugs?", "Drugs are chemical substances used to diagnose, prevent or treat diseases, or to modify physiological functions."],
      ["What are analgesics?", "Analgesics are medicines used to relieve pain without necessarily causing loss of consciousness."],
      ["What are antibiotics?", "Antibiotics are substances that kill bacteria or inhibit their growth. They are used to treat bacterial infections."],
      ["What are antiseptics?", "Antiseptics are chemical substances applied to living tissues to prevent or reduce the growth of microorganisms."],
      ["What are artificial sweeteners?", "Artificial sweeteners are substances used to provide sweetness with little or no energy contribution compared with ordinary sugar."],
      ["What are preservatives?", "Preservatives are substances added to products, especially foods, to slow spoilage and extend shelf life."]
    ],
    formulas: [
      ["Aspirin", "C₉H₈O₄", "Aspirin is an analgesic and antipyretic medicine."],
      ["Paracetamol", "C₈H₉NO₂", "Paracetamol is commonly used to relieve pain and reduce fever."],
      ["Saccharin", "C₇H₅NO₃S", "Saccharin is an artificial sweetener."],
      ["Sodium benzoate", "C₆H₅COONa", "Sodium benzoate is used as a food preservative in suitable products."]
    ]
  }
];

/*
  Build six entries in each learning section.
  The six textbook concepts are used as the basis for the
  practice questions, important questions and worked explanations.
*/

function makeBookback(topics) {
  return topics.map((topic, index) => ({
    question: topic[0],
    answer:
      "Explanation:\n" + topic[1] +
      "\n\nKey point: Remember the definition and the important scientific terms."
  }));
}

function makeImportant(topics) {
  return topics.map((topic, index) => ({
    question: "Explain in detail: " + topic[0],
    answer:
      "Step 1 – Understand the concept:\n" +
      topic[1] +
      "\n\nStep 2 – Important point:\n" +
      "Use the scientific terminology correctly and relate the explanation to the chapter concept.\n\n" +
      "Final answer:\n" + topic[1]
  }));
}

function makeWorked(topics) {
  return topics.map((topic, index) => ({
    question: "Worked Example " + (index + 1) + ": " + topic[0],
    answer:
      "Step 1 – Identify the concept:\n" +
      topic[0] +
      "\n\nStep 2 – Explanation:\n" +
      topic[1] +
      "\n\nStep 3 – Apply the concept:\n" +
      "Use this principle when answering related textbook questions. Write the relevant definition, equation or chemical principle wherever required.\n\n" +
      "Final answer:\n" + topic[1]
  }));
}

function makeFormulaSheet(formulas) {
  return formulas.map(item => ({
    name: item[0],
    expression: item[1],
    explanation: item[2]
  }));
}

window.chemistryChapters = chapterTopics.map(chapter => ({
  number: chapter.number,
  title: chapter.title,
  volume: chapter.number <= 7 ? 1 : 2,
  bookback: makeBookback(chapter.topics),
  important: makeImportant(chapter.topics),
  worked: makeWorked(chapter.topics),
  formula: makeFormulaSheet(chapter.formulas)
}));
