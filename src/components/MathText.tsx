'use client';

import React, { useMemo } from 'react';

interface MathTextProps {
  text: string;
  className?: string;
  highlightSearch?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatMCQOptions(text: string): string {
  // Format MCQ options onto separate lines
  return text.replace(/\s*\(([A-D])\)\s*/g, (match, letter) => {
    return `\n<span class="mcq-option"><span class="mcq-letter">${letter}</span> `;
  }) + (text.includes('(A)') ? '</span>' : '');
}

function processChemistryText(text: string): string {
  let result = escapeHtml(text);

  // Format MCQ options
  if (result.includes('(A)') && result.includes('(B)')) {
    result = result.replace(/\s*\(([A-D])\)\s*/g, (_match, letter) => {
      return `<br/><span class="inline-flex items-baseline gap-1.5 mt-1"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex-shrink-0">${letter}</span> `;
    });
    result = result + '</span>';
  }

  // Subscripts for chemical formulas: H2O, CO2, C6H12O6 etc.
  // Only apply to known elements followed by digits
  const elements = ['H', 'C', 'N', 'O', 'S', 'P', 'F', 'Cl', 'Br', 'I', 'Na', 'K', 'Ca', 'Mg', 'Fe', 'Cu', 'Zn', 'Al', 'Si', 'Mn', 'Cr', 'Co', 'Ni'];
  elements.forEach(el => {
    const re = new RegExp(`(?<![A-Za-z])(${el})(\\d+)(?![a-z])`, 'g');
    result = result.replace(re, `$1<sub>$2</sub>`);
  });

  // Ionic charges like 2+, 3-, Fe2+, SO4 2-
  result = result.replace(/([A-Za-z\d\)])\s*(\d*[+\-]+)\s*(?=[\s,\.\)\]<]|$)/g, (match, base, charge) => {
    if (charge.length <= 3) return `${base}<sup>${charge}</sup>`;
    return match;
  });

  // Reaction arrows
  result = result.replace(/→/g, ' <span class="text-blue-600 font-bold text-lg leading-none">→</span> ');
  result = result.replace(/-&gt;/g, ' <span class="text-blue-600 font-bold text-lg leading-none">→</span> ');
  result = result.replace(/⇌|⇋/g, ' <span class="text-purple-600 font-bold text-lg leading-none">⇌</span> ');
  result = result.replace(/\\rightarrow/g, ' <span class="text-blue-600 font-bold">→</span> ');

  // Greek letters & common symbols
  result = result.replace(/\bDelta([A-Za-z])/g, 'Δ$1');
  result = result.replace(/\bDelta\b/g, 'Δ');
  result = result.replace(/\balpha\b/gi, 'α');
  result = result.replace(/\bbeta\b/gi, 'β');
  result = result.replace(/\bgamma\b/gi, 'γ');
  result = result.replace(/\blambda\b/gi, 'λ');
  result = result.replace(/\bmu\b/gi, 'μ');
  result = result.replace(/\bnu\b/g, 'ν');
  result = result.replace(/\bpi\b/g, 'π');
  result = result.replace(/\bsigma\b/g, 'σ');

  // Degree symbol
  result = result.replace(/(\d+)\s*degrees?\b/gi, '$1°');

  return result;
}

export default function MathText({ text, className = '', highlightSearch }: MathTextProps) {
  const processedHtml = useMemo(() => {
    let processed = processChemistryText(text);

    if (highlightSearch && highlightSearch.trim()) {
      const escaped = highlightSearch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'gi');
      processed = processed.replace(regex, '<mark class="bg-yellow-200 text-yellow-900 rounded px-0.5">$1</mark>');
    }

    return processed;
  }, [text, highlightSearch]);

  return (
    <span
      className={`math-text ${className}`}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
}
