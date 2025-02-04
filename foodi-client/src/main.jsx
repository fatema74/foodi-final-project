import { createRoot } from 'react-dom/client';
import './index.css';

import router from './Router/Router';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';

// tankstack
import {
QueryClient,
QueryClientProvider,
} from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
<AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
</AuthProvider>
);
