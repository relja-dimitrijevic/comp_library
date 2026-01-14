import { useState } from 'react';
import './Pricing_3.css';

function Pricing_3() {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: 'Basic',
            monthly: '$19',
            yearly: '$190',
            features: ['Feature One', 'Feature Two', 'Feature Three']
        },
        {
            name: 'Pro',
            monthly: '$49',
            yearly: '$490',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four'],
            popular: true
        },
        {
            name: 'Enterprise',
            monthly: '$99',
            yearly: '$990',
            features: ['Feature One', 'Feature Two', 'Feature Three', 'Feature Four', 'Feature Five']
        }
    ];

    return (
        <div className='pricing-container-v3'>
            <h2 className='pricing-title-v3'>Pricing</h2>
            <div className='pricing-toggle-v3'>
                <span className={!isYearly ? 'active' : ''}>Monthly</span>
                <button 
                    className={`toggle-switch-v3 ${isYearly ? 'yearly' : ''}`}
                    onClick={() => setIsYearly(!isYearly)}
                >
                    <span className='toggle-slider-v3'></span>
                </button>
                <span className={isYearly ? 'active' : ''}>Yearly</span>
            </div>
            <div className='pricing-grid-v3'>
                {plans.map((plan, index) => (
                    <div key={index} className={`pricing-card-v3 ${plan.popular ? 'popular' : ''}`}>
                        {plan.popular && <div className='popular-label-v3'>Most Popular</div>}
                        <h3 className='plan-name-v3'>{plan.name}</h3>
                        <div className='plan-price-v3'>
                            <span className='price-amount-v3'>{isYearly ? plan.yearly : plan.monthly}</span>
                            <span className='price-period-v3'>{isYearly ? '/year' : '/month'}</span>
                        </div>
                        <ul className='plan-features-v3'>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className='feature-item-v3'>{feature}</li>
                            ))}
                        </ul>
                        <button className='plan-button-v3'>Get Started</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pricing_3;
