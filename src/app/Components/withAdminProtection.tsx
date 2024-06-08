// app/components/withAdminProtection.tsx
'use client';
import React, { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

const withAdminProtection = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  const ComponentWithAdminProtection = (props: P) => {
    const { authState } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!authState.isLoggedIn || authState.role !== 'admin') {
        router.push('/');
      }
    }, [authState, router]);

    if (!authState.isLoggedIn || authState.role !== 'admin') {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  // Set a display name for the HOC for better debugging and to resolve linting issues
  ComponentWithAdminProtection.displayName = `WithAdminProtection(${getDisplayName(WrappedComponent)})`;

  return ComponentWithAdminProtection;
};

// Helper function to get the display name of a component
function getDisplayName<P>(WrappedComponent: ComponentType<P>): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAdminProtection;
