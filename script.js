
function showSection(sectionId) {
    document.querySelectorAll('.calculator-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    clearResults();
    if (sectionId === 'ohm-law') updateOhmInputs();
    if (sectionId === 'power') updatePowerInputs();
    if (sectionId === 'capacitance') updateCapacitanceInputs();
    if (sectionId === 'inductance') updateInductanceInputs();
    if (sectionId === 'resistors') updateResistorInputs();
}

function clearResults() {
    const resultElements = ['ohm-result', 'power-result', 'voltage-result', 'current-result', 'capacitance-result', 'inductance-result', 'resistor-result', 'energy-result', 'rlc-result'];
    resultElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
    });
}

function updateOhmInputs() {
    const choice = document.getElementById('ohm-choice').value;
    const inputsDiv = document.getElementById('ohm-inputs');
    inputsDiv.innerHTML = '';
    if (choice === '1') {
        inputsDiv.innerHTML = `
                    <input id="r-ohm" type="number" step="any" placeholder="Resistance (Ohms)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                    <input id="i-ohm" type="number" step="any" placeholder="Current (A)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                `;
    } else if (choice === '2') {
        inputsDiv.innerHTML = `
                    <input id="v-ohm" type="number" step="any" placeholder="Voltage (V)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                    <input id="r-ohm" type="number" step="any" placeholder="Resistance (Ohms)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                `;
    } else if (choice === '3') {
        inputsDiv.innerHTML = `
                    <input id="v-ohm" type="number" step="any" placeholder="Voltage (V)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                    <input id="i-ohm" type="number" step="any" placeholder="Current (A)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                `;
    }
}

function calculateOhm() {
    const choice = document.getElementById('ohm-choice').value;
    const result = document.getElementById('ohm-result');
    try {
        if (choice === '1') {
            const R = parseFloat(document.getElementById('r-ohm').value);
            const I = parseFloat(document.getElementById('i-ohm').value);
            if (isNaN(R) || isNaN(I)) throw new Error('Invalid input');
            result.textContent = `Voltage (V) = ${R * I} V`;
        } else if (choice === '2') {
            const V = parseFloat(document.getElementById('v-ohm').value);
            const R = parseFloat(document.getElementById('r-ohm').value);
            if (isNaN(V) || isNaN(R) || R === 0) throw new Error('Invalid input');
            result.textContent = `Current (I) = ${V / R} A`;
        } else if (choice === '3') {
            const V = parseFloat(document.getElementById('v-ohm').value);
            const I = parseFloat(document.getElementById('i-ohm').value);
            if (isNaN(V) || isNaN(I) || I === 0) throw new Error('Invalid input');
            result.textContent = `Resistance (R) = ${V / I} Ohms`;
        }
    } catch (e) {
        result.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function updatePowerInputs() {
    const choice = document.getElementById('power-choice').value;
    const inputsDiv = document.getElementById('power-inputs');
    inputsDiv.innerHTML = '';
    if (choice === '1') {
        inputsDiv.innerHTML = `
                    <input id="v-power" type="number" step="any" placeholder="Voltage (V)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                    <input id="i-power" type="number" step="any" placeholder="Current (A)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                `;
    } else if (choice === '2') {
        inputsDiv.innerHTML = `
                    <input id="i-power" type="number" step="any" placeholder="Current (A)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                    <input id="r-power" type="number" step="any" placeholder="Resistance (Ohms)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                `;
    } else if (choice === '3') {
        inputsDiv.innerHTML = `
                    <input id="v-power" type="number" step="any" placeholder="Voltage (V)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                    <input id="r-power" type="number" step="any" placeholder="Resistance (Ohms)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                `;
    }
}

function calculatePower() {
    const choice = document.getElementById('power-choice').value;
    const result = document.getElementById('power-result');
    try {
        if (choice === '1') {
            const V = parseFloat(document.getElementById('v-power').value);
            const I = parseFloat(document.getElementById('i-power').value);
            if (isNaN(V) || isNaN(I)) throw new Error('Invalid input');
            result.textContent = `Power (P) = ${V * I} W`;
        } else if (choice === '2') {
            const I = parseFloat(document.getElementById('i-power').value);
            const R = parseFloat(document.getElementById('r-power').value);
            if (isNaN(I) || isNaN(R)) throw new Error('Invalid input');
            result.textContent = `Power (P) = ${I * I * R} W`;
        } else if (choice === '3') {
            const V = parseFloat(document.getElementById('v-power').value);
            const R = parseFloat(document.getElementById('r-power').value);
            if (isNaN(V) || isNaN(R) || R === 0) throw new Error('Invalid input');
            result.textContent = `Power (P) = ${(V * V) / R} W`;
        }
    } catch (e) {
        result.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function calculateVoltageDivider() {
    const result = document.getElementById('voltage-result');
    try {
        const V_in = parseFloat(document.getElementById('v-in').value);
        const R1 = parseFloat(document.getElementById('r1-v').value);
        const R2 = parseFloat(document.getElementById('r2-v').value);
        if (isNaN(V_in) || isNaN(R1) || isNaN(R2) || (R1 + R2) === 0) throw new Error('Invalid input');
        const V_out = V_in * (R2 / (R1 + R2));
        result.textContent = `Output Voltage (V_out) = ${V_out} V`;
    } catch (e) {
        result.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function calculateCurrentDivider() {
    const result = document.getElementById('current-result');
    try {
        const I_total = parseFloat(document.getElementById('i-total').value);
        const R1 = parseFloat(document.getElementById('r1-i').value);
        const R2 = parseFloat(document.getElementById('r2-i').value);
        if (isNaN(I_total) || isNaN(R1) || isNaN(R2) || (R1 + R2) === 0) throw new Error('Invalid input');
        const I_R = I_total * (R2 / (R1 + R2));
        result.textContent = `Current in R2 (I_R) = ${I_R} A`;
    } catch (e) {
        result.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function updateCapacitanceInputs() {
    const choice = document.getElementById('capacitance-choice').value;
    const inputsDiv = document.getElementById('capacitance-inputs');
    inputsDiv.innerHTML = `
                <input id="n-cap" type="number" step="1" placeholder="Number of Capacitors" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                <div id="cap-values"></div>
            `;
    document.getElementById('n-cap').addEventListener('input', updateCapValues);
}

function updateCapValues() {
    const n = parseInt(document.getElementById('n-cap').value) || 0;
    const capValues = document.getElementById('cap-values');
    capValues.innerHTML = '';
    for (let i = 0; i < n; i++) {
        capValues.innerHTML += `
                    <input id="c-${i}" type="number" step="any" placeholder="Capacitor ${i + 1} (F)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                `;
    }
}

function calculateCapacitance() {
    const choice = document.getElementById('capacitance-choice').value;
    const result = document.getElementById('capacitance-result');
    try {
        const n = parseInt(document.getElementById('n-cap').value);
        if (isNaN(n) || n < 1) throw new Error('Invalid number of capacitors');
        let C_total = 0;
        if (choice === '1') {
            let recip_sum = 0;
            for (let i = 0; i < n; i++) {
                const C = parseFloat(document.getElementById(`c-${i}`).value);
                if (isNaN(C) || C === 0) throw new Error('Invalid capacitance value');
                recip_sum += 1 / C;
            }
            C_total = 1 / recip_sum;
        } else if (choice === '2') {
            for (let i = 0; i < n; i++) {
                const C = parseFloat(document.getElementById(`c-${i}`).value);
                if (isNaN(C)) throw new Error('Invalid capacitance value');
                C_total += C;
            }
        }
        result.textContent = `Total Capacitance (C_total) = ${C_total} F`;
    } catch (e) {
        result.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function updateInductanceInputs() {
    const choice = document.getElementById('inductance-choice').value;
    const inputsDiv = document.getElementById('inductance-inputs');
    inputsDiv.innerHTML = `
                <input id="n-ind" type="number" step="1" placeholder="Number of Inductors" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                <div id="ind-values"></div>
            `;
    document.getElementById('n-ind').addEventListener('input', updateIndValues);
}

function updateIndValues() {
    const n = parseInt(document.getElementById('n-ind').value) || 0;
    const indValues = document.getElementById('ind-values');
    indValues.innerHTML = '';
    for (let i = 0; i < n; i++) {
        indValues.innerHTML += `
                    <input id="l-${i}" type="number" step="any" placeholder="Inductor ${i + 1} (H)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                `;
    }
}

function calculateInductance() {
    const choice = document.getElementById('inductance-choice').value;
    const result = document.getElementById('inductance-result');
    try {
        const n = parseInt(document.getElementById('n-ind').value);
        if (isNaN(n) || n < 1) throw new Error('Invalid number of inductors');
        let L_total = 0;
        if (choice === '1') {
            for (let i = 0; i < n; i++) {
                const L = parseFloat(document.getElementById(`l-${i}`).value);
                if (isNaN(L)) throw new Error('Invalid inductance value');
                L_total += L;
            }
        } else if (choice === '2') {
            let recip_sum = 0;
            for (let i = 0; i < n; i++) {
                const L = parseFloat(document.getElementById(`l-${i}`).value);
                if (isNaN(L) || L === 0) throw new Error('Invalid inductance value');
                recip_sum += 1 / L;
            }
            L_total = 1 / recip_sum;
        }
        result.textContent = `Total Inductance (L_total) = ${L_total} H`;
    } catch (e) {
        result.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function updateResistorInputs() {
    const choice = document.getElementById('resistor-choice').value;
    const inputsDiv = document.getElementById('resistor-inputs');
    inputsDiv.innerHTML = `
                <input id="n-res" type="number" step="1" placeholder="Number of Resistors" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                <div id="res-values"></div>
            `;
    document.getElementById('n-res').addEventListener('input', updateResValues);
}

function updateResValues() {
    const n = parseInt(document.getElementById('n-res').value) || 0;
    const resValues = document.getElementById('res-values');
    resValues.innerHTML = '';
    for (let i = 0; i < n; i++) {
        resValues.innerHTML += `
                    <input id="r-${i}" type="number" step="any" placeholder="Resistor ${i + 1} (Ohms)" class="w-full p-2 border rounded mb-4 w-48 m-auto inline-flex items-center justify-center bg-[#18181B] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors shadow text-white hover:bg-primary/90 h-9 px-4 py-2 border-zinc-800">
                `;
    }
}

function calculateResistors() {
    const choice = document.getElementById('resistor-choice').value;
    const result = document.getElementById('resistor-result');
    try {
        const n = parseInt(document.getElementById('n-res').value);
        if (isNaN(n) || n < 1) throw new Error('Invalid number of resistors');
        let R_total = 0;
        if (choice === '1') {
            for (let i = 0; i < n; i++) {
                const R = parseFloat(document.getElementById(`r-${i}`).value);
                if (isNaN(R)) throw new Error('Invalid resistance value');
                R_total += R;
            }
        } else if (choice === '2') {
            let recip_sum = 0;
            for (let i = 0; i < n; i++) {
                const R = parseFloat(document.getElementById(`r-${i}`).value);
                if (isNaN(R) || R === 0) throw new Error('Invalid resistance value');
                recip_sum += 1 / R;
            }
            R_total = 1 / recip_sum;
        }
        result.textContent = `Total Resistance = ${R_total} Ohms`;
    } catch (e) {
        result.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function calculateEnergy() {
    const result = document.getElementById('energy-result');
    try {
        const P = parseFloat(document.getElementById('power-w').value);
        const t = parseFloat(document.getElementById('time-s').value);
        if (isNaN(P) || isNaN(t)) throw new Error('Invalid input');
        const E = P * t;
        result.textContent = `Energy Consumed = ${E} Joules`;
    } catch (e) {
        result.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

function calculateRLC() {
    const result = document.getElementById('rlc-result');
    try {
        const R = parseFloat(document.getElementById('r-rlc').value);
        const L = parseFloat(document.getElementById('l-rlc').value);
        const C = parseFloat(document.getElementById('c-rlc').value);
        const f = parseFloat(document.getElementById('f-rlc').value);
        if (isNaN(R) || isNaN(L) || isNaN(C) || isNaN(f) || C === 0) throw new Error('Invalid input');
        const X_L = 2 * Math.PI * f * L;
        const X_C = 1 / (2 * Math.PI * f * C);
        const Z = Math.sqrt(R * R + (X_L - X_C) * (X_L - X_C));
        result.textContent = `Total Impedance (Z) = ${Z} Ohms`;
    } catch (e) {
        result.textContent = 'Invalid input. Please enter valid numbers.';
    }
}

document.getElementById('ohm-choice').addEventListener('change', updateOhmInputs);
document.getElementById('power-choice').addEventListener('change', updatePowerInputs);
document.getElementById('capacitance-choice').addEventListener('change', updateCapacitanceInputs);
document.getElementById('inductance-choice').addEventListener('change', updateInductanceInputs);
document.getElementById('resistor-choice').addEventListener('change', updateResistorInputs);