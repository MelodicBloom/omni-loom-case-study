/**
 * Smoke test: ArchitectureDiagram renders without throwing.
 * Run with: npx jest or vitest (add runner of choice).
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArchitectureDiagram } from './ArchitectureDiagram';

describe('ArchitectureDiagram', () => {
  it('renders the section heading', () => {
    render(<ArchitectureDiagram />);
    expect(
      screen.getByText(/Intent → Artifact Pipeline/i)
    ).toBeTruthy();
  });

  it('renders all 5 stage nodes', () => {
    render(<ArchitectureDiagram />);
    expect(screen.getByText('Creative Intent')).toBeTruthy();
    expect(screen.getByText('Job Compiler')).toBeTruthy();
    expect(screen.getByText('Tool Plan')).toBeTruthy();
    expect(screen.getByText('Geometry Kernel')).toBeTruthy();
    expect(screen.getByText('Artifact Output')).toBeTruthy();
  });
});
