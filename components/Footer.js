export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 rounded-2xl">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Top Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm text-gray-700">

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>The Linktree Blog</li>
                            <li>Engineering Blog</li>
                            <li>Marketplace</li>
                            <li>What&apos;s New</li>
                            <li>About</li>
                            <li>Press</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="font-semibold mb-4">Community</h3>
                        <ul className="space-y-2">
                            <li>Link in Bio</li>
                            <li>Social Good</li>
                            <li>Contact</li>
                            <li>Linktree for Enterprise</li>
                            <li>2023 Creator Report</li>
                            <li>2022 Creator Report</li>
                            <li>Charities</li>
                            <li>Creator Profile Directory</li>
                            <li>Explore Templates</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>Help Topics</li>
                            <li>Getting Started</li>
                            <li>Linktree Pro</li>
                            <li>Features & How-Tos</li>
                            <li>FAQs</li>
                            <li>Report a Violation</li>
                        </ul>
                    </div>

                    {/* Trust & Legal */}
                    <div>
                        <h3 className="font-semibold mb-4">Trust & Legal</h3>
                        <ul className="space-y-2">
                            <li>Terms & Conditions</li>
                            <li>Privacy Notice</li>
                            <li>Cookie Notice</li>
                            <li>Trust Center</li>
                            <li>Cookies Preferences</li>
                            <li>Transparency Report</li>
                            <li>Law Enforcement Access Policy</li>
                            <li>Human Rights</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © 2025 Linktree Clone. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <button className="text-sm font-medium text-gray-700 hover:underline">
                            Log in
                        </button>
                        <button className="text-sm font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900">
                            Get started for free
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
